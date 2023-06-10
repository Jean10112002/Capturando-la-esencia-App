import { Component, Input, OnChanges } from '@angular/core';
import { Categoria, MayorLikesComentario } from 'src/app/private/interfaces/calificacion/calificacion.interface';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-table-categoria',
  templateUrl: './table-categoria.component.html',
  styleUrls: ['./table-categoria.component.scss'],
})
export class TableCategoriaComponent implements AfterViewInit,OnChanges {

  displayedColumns: string[] = ['titulo','calificacion','nombres','cedula','jurado','calificaciones'];
  @Input() dataInformation!: Categoria;
  dataSource = new MatTableDataSource<MayorLikesComentario>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnChanges(changes:any): void {
    console.log(changes.dataInformation.currentValue)
    this.dataSource = new MatTableDataSource<MayorLikesComentario>(changes.dataInformation.currentValue.post);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
