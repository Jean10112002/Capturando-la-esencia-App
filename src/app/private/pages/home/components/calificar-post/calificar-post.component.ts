import { Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { Calificacion, CalificacionBodyI } from 'src/app/private/interfaces/calificacion/calificacion.interface';
import { Datum } from 'src/app/private/interfaces/post/post.interface';
import { CalificacionService } from 'src/app/private/services/calificacion.service';
import { EnventEmissorService } from 'src/app/private/services/envent-emissor.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';

@Component({
  selector: 'app-calificar-post',
  templateUrl: './calificar-post.component.html',
  styleUrls: ['./calificar-post.component.scss'],
})
export class CalificarPostComponent implements OnDestroy{
  @Input() post!:Datum;
  IsCalificated!:boolean
  myForm!: FormGroup;
  user!:UserI
  private destroy$:Subject<boolean>=new Subject<boolean>();
  constructor(private formBuilder: FormBuilder,private toastService:ToastrService,private calificarService:CalificacionService,private dataServiceUser:UserInformationService,private eventEmitterService:EnventEmissorService) {
    dataServiceUser.getData().pipe(takeUntil(this.destroy$)).subscribe(data=>{
      this.user=data;
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete()
  }
  ngOnInit() {
    this.buildForm();
    this.verifyThisPostCalificated();
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      contenido: ['', [Validators.required]],
      organizacion: ['', Validators.required],
      creatividad: ['', [Validators.required]],
      tecnica: ['', Validators.required],
    });
  }
  onSubmit(form:any) {
    if (this.myForm.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.myForm.controls).forEach((control) =>
        control.markAsTouched()
      );
      this.toastService.error('Llenar todos los campos', 'Proceso Erroneo')
      return;
    } else {
      const body:CalificacionBodyI={
        contenido:form.contenido,
        creatividad:form.creatividad,
        organizacion_estatica:form.organizacion,
        post_id:this.post.id,
        tecnica:form.tecnica
      }
      this.calificarService.crearCalificacion(body).subscribe((data)=>{
        this.toastService.success('Calificacion creada','Proceso Exitoso')
        this.IsCalificated=true;
        this.eventEmitterService.setEvent({event:'CALIFICACION_CREADA',id:this.post.id});
      })
      };
    }
    verifyThisPostCalificated():boolean{
      const post:any=this.post.calificacion.filter(post=>post.user_id==this.user.id);
      console.log(post)
      if(post.length>0){
        this.IsCalificated=true;
         this.myForm.setValue({
          contenido:post[0].contenido.toString(),
          creatividad:post[0].creatividad.toString(),
          organizacion:post[0].organizacion_estatica.toString(),
          tecnica:post[0].tecnica.toString()
        })

      }else{
        this.IsCalificated=false;
      }
      return true;
    }
  }
