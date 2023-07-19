import { DOCUMENT, DatePipe } from '@angular/common';
import { Component,HostListener,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { Participante, Posts } from 'src/app/private/interfaces/post/post.interface';
import { PostService } from 'src/app/private/services/post.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI, UserProfileI } from 'src/app/public/interfaces/Login.response.interface';
import { AuthService } from 'src/app/public/services/auth.service';
import { config } from 'src/config/config';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.scss'],
})
export class CalificacionComponent {
  jurado!: UserI;
  next_page_url!: string;

  user!: UserI | Participante;

  posts!: Posts;
  showButton: boolean = false;
  private scrollHeight: number = 500;
  private destroy$: Subject<void> = new Subject<void>();

  currentDateTime!: any;
    //calificar
    startCalificar = config.startCalificar;
    endCalificar = config.endCalificar;
    isInDateRangeCalificar!: any;
    isInTimeRangeCalificar!: any;
    shouldShowComponentCalificar!: boolean;
  constructor(
    juradoDataService: UserInformationService,
    private readonly router: Router,

    private readonly authService: AuthService,

    private readonly postService: PostService,
    @Inject(DOCUMENT) private document: Document,
    private readonly datePipe:DatePipe
  ) {

    authService.userInformation().subscribe((user: UserProfileI) => {
      this.user = user.user;
      if (this.user.rol === 'admin') {
        juradoDataService.setInformationUser(user.user);
      }
      if (this.user.rol === 'jurado') {
        juradoDataService.setInformationUser(user.user);
      }
      if (this.user.rol === 'participante') {
        juradoDataService.setInformationParticipante(user.user);
      }
    });

    this.currentDateTime = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd HH:mm:ss'
    );
    //calfiicar
    this.isInDateRangeCalificar =
      this.currentDateTime >= this.startCalificar &&
      this.currentDateTime <= this.endCalificar;
    this.isInTimeRangeCalificar =
      this.currentDateTime.split(' ')[1] >= this.startCalificar.split(' ')[1] &&
      this.currentDateTime.split(' ')[1] <= this.endCalificar.split(' ')[1];
    this.shouldShowComponentCalificar =
      this.isInDateRangeCalificar && this.isInTimeRangeCalificar;
      if(!this.shouldShowComponentCalificar){
        this.router.navigate(['/home'])
      }
    juradoDataService.getData().pipe(takeUntil(this.destroy$)).subscribe((jurado) => {
      if (jurado.rol === '' || jurado.rol != 'jurado') {
        this.router.navigate(['/home']);
      } else {
        this.jurado = jurado;
      }
    });
    postService
      .getPostsWithoutCalificacion()
      .pipe(map((res) => res.Posts))
      .subscribe((data) => {

        /* this.posts=data;
        this.next_page_url=data.next_page_url; */
        const newData = data.data.filter(
          (post) => !this.posts.data.some((p) => p.id === post.id)
        );
          console.log(data,newData)
        this.posts.data = this.posts.data.concat(newData);
        console.log(this.posts);
        this.next_page_url = data.next_page_url;
      });

  }
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageXOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }
  onScrollDown() {
    console.log('hacer peticion');
    if (this.next_page_url !== null) {
      this.postService
        .getPostPaginatewithoutCalificacion(this.next_page_url)
        .pipe(map((res) => res.Posts))
        .subscribe((data) => {
          console.log(data)
         this.posts.data=this.posts.data.concat(data.data);
          console.log(this.posts)
          this.next_page_url = data.next_page_url;
        });
    } else {
      console.log('se acabaron los datos');
    }
  }

  goToTopScroll() {
    this.document.documentElement.scrollTop = 0;
  }
  recibirCategoria(event: number) {
    if (event == 0) {
      this.postService
        .getPostsWithoutCalificacion()
        .pipe(map((result) => result.Posts))
        .subscribe((data) => {
          this.posts = data;
          this.next_page_url = data.next_page_url;
          this.goToTopScroll()
        });
    } else {
      this.postService
        .getPostsByCategoryWithoutCalification(event)
        .pipe(map((result: any) => result.Posts))
        .subscribe((data) => {
          console.log(data);
          this.posts = data;
          this.next_page_url = data.next_page_url;
          this.goToTopScroll()

        });
    }
    console.log(event);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
