import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
constructor(private notificacion:ToastrService){}
  ngOnInit(): void {
      this.ShowSuccess();

      this.ShowError();

  }

  ShowSuccess(){
    this.notificacion.success('El toast de success esta funcionando corretamente','Proceso Exitoso');
  }
  ShowError(){
    this.notificacion.error('El toast de error esta funcionando corretamente','Proceso Erroneo');
  }

}
