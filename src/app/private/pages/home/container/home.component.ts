import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';

//Importaciones para abrir el Cuadro de Dialogo de Crear
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { AuthService } from 'src/app/public/services/auth.service';
import {
  UserI,
  UserProfileI,
} from 'src/app/public/interfaces/Login.response.interface';
import { Observable, map, tap } from 'rxjs';
import {
  Participante,
  Posts,
} from 'src/app/private/interfaces/post/post.interface';
import { PostService } from 'src/app/private/services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUserCommentsComponent } from '../components/modal-user-comments/modal-user-comments.component';
import { DOCUMENT } from '@angular/common';
import { ModalCalificarPostComponent } from '../components/modal-calificar-post/modal-calificar-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('scroll') miDiv!: ElementRef;

  next_page_url!: string;
  user!: UserI | Participante;
  posts!: Posts;
  showDialog = false;
  showButton: boolean = false;
  private scrollHeight: number = 500;
  constructor(
    private readonly authService: AuthService,
    private readonly userDataService: UserInformationService,
    private readonly postService: PostService,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document
  ) {
    authService.userInformation().subscribe((user: UserProfileI) => {
      this.user = user.user;
      if (this.user.rol === 'admin') {
        this.userDataService.setInformationUser(user.user);
      }
      if (this.user.rol === 'jurado') {
        this.userDataService.setInformationUser(user.user);
      }
      if (this.user.rol === 'participante') {
        this.userDataService.setInformationParticipante(user.user);
      }
    });
    postService
      .getPosts()
      .pipe(map((res) => res.Posts))
      .subscribe((data) => {
        this.posts = data;
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
        .getPostPaginate(this.next_page_url)
        .pipe(map((res) => res.Posts))
        .subscribe((data) => {
          console.log(data);
          this.posts.data = this.posts.data.concat(data.data);
          console.log(this.posts);
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
        .getPosts()
        .pipe(map((result) => result.Posts))
        .subscribe((data) => {
          this.posts = data;
          this.next_page_url = data.next_page_url;
          this.regresarAlTop();
        });
    } else {
      this.postService
        .getPostsByCategory(event)
        .pipe(map((result: any) => result.Posts))
        .subscribe((data) => {
          console.log(data);
          this.posts = data;
          this.next_page_url = data.next_page_url;
          this.regresarAlTop();
        });
    }
    console.log(event);
  }

  /* esta funcion esat solo aqui por la cards estatica */

  openDialogComment() {
    const dialogRef = this.dialog.open(ModalUserCommentsComponent, {
      width: '30%',
      minWidth: '292px',
    });
  }

  openDialogCalificar() {
    const dialogRef = this.dialog.open(ModalCalificarPostComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /* hasta aqui es el estatico */

  recibirPosts(event: number) {
    this.recibirCategoria(event);
  }
  regresarAlTop() {
    const divElement: HTMLElement = this.miDiv.nativeElement;
    divElement.scrollTop = 0;
  }
}
