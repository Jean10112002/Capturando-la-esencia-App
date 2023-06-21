import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria, MayorLikesComentario} from 'src/app/private/interfaces/calificacion/calificacion.interface';
@Component({
  selector: 'app-table-like-comentario',
  templateUrl: './table-like-comentario.component.html',
  styleUrls: ['./table-like-comentario.component.scss']
})
export class TableLikeComentarioComponent implements AfterViewInit,OnChanges {
  displayedColumns: string[] = ['titulo','descripcion','nombreCategoria','nombres','cedula','like_count','comentario__post_count'];
/* displayedColumns: string[] = ['resultado']; */
  @Input() dataInformation!: MayorLikesComentario[] ;
  dataSource = new MatTableDataSource<MayorLikesComentario[]>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes:any): void {
    console.log(changes.dataInformation.currentValue)
    this.dataSource = new MatTableDataSource<MayorLikesComentario[]>(changes.dataInformation.currentValue);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
}
