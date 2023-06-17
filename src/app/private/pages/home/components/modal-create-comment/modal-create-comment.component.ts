import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ComentarioI } from 'src/app/private/interfaces/comentario/comentario.interface';
import { ComentarioService } from 'src/app/private/services/comentario.service';
import { InteraccionService } from 'src/app/private/services/interaccion.service';
import { config } from 'src/config/config';
import { ComentarioInteraccionI } from '../../../../interfaces/interaccion/comentario.interaccion.interface';
import { ToastrService } from 'ngx-toastr';
import { EnventEmissorService } from 'src/app/private/services/envent-emissor.service';

@Component({
  selector: 'app-modal-create-comment',
  templateUrl: './modal-create-comment.component.html',
  styleUrls: ['./modal-create-comment.component.scss'],
})
export class ModalCreateCommentComponent {
  @Output() newItemEvent = new EventEmitter<number>();
  avatar: string = config.avatarUrl;
  comentarioId!: number;
  optionSelected!: string;
  comentarios$!: Observable<ComentarioI>;
  constructor(
    public dialogRef: MatDialogRef<ModalCreateCommentComponent>,
    private readonly interaccionService: InteraccionService,
    private readonly comentarioService: ComentarioService,
    @Inject(MAT_DIALOG_DATA) private post_id: number,
    private notificacion:ToastrService,
    private eventEmissorService:EnventEmissorService

  ) {
    this.comentarios$ = this.comentarioService.getComentarios();
  }
  activateComment(mensaje: string, id_comentario: number) {
    this.optionSelected = mensaje;
    this.comentarioId = id_comentario;
  }
  sendComment() {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Se agrega 1 ya que los meses se indexan desde 0
    const dia = fechaActual.getDate();
    const fechaFormateada = `${anio}-${mes}-${dia}`;
    const comentario: ComentarioInteraccionI = {
      comentario_id: this.comentarioId,
      fecha: fechaFormateada,
      post_id: this.post_id,
    };
    this.interaccionService.createComentario(comentario).subscribe((res)=>{
      this.notificacion.success('Comentario Creado','Proceso Exitoso');
      this.eventPost();
      this.eventPostIncreaseLike();
    });
  }
  eventPost(){
    this.newItemEvent.emit(this.post_id);
  }
  eventPostIncreaseLike(){
    this.eventEmissorService.setEvent({
      event:'AUMENTAR_COMENTARIO',
      id:this.post_id
    })
  }

}
