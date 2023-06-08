import { Comentario } from './../../../interfaces/post/post.search-by-categoria.interface';
import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/private/services/user-information.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userDataService: UserInformationService){

  }
  ngOnInit(): void {
    this.userDataService.getData().subscribe((data)=>{
      console.log(data)
    })
  }
  gallery = [
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'50',comentario:'100' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'10',comentario:'10' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'20',comentario:'20' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'30',comentario:'30' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'40',comentario:'40' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'10',comentario:'50' },

    // Agrega más imágenes aquí
  ];

}
