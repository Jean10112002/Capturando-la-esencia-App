import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria, MayorLikesComentario } from 'src/app/private/interfaces/calificacion/calificacion.interface';
@Component({
  selector: 'app-table-like-comentario',
  templateUrl: './table-like-comentario.component.html',
  styleUrls: ['./table-like-comentario.component.scss']
})
export class TableLikeComentarioComponent {
  displayedColumns: string[] = ['titulo del post','descripcion del post','nombres','cedula','nombre de la categoria','like_count','comentario__post_count'];
  @Input() dataInformation!: any;
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: any): void {
    if (changes.dataInformation.currentValue) {
      const posts = changes.dataInformation.currentValue;
      const postWithMaxLikes = this.getPostWithMaxLikes(posts);
      const postWithMaxComments = this.getPostWithMaxComments(posts);

      this.dataSource = new MatTableDataSource<any>([
        postWithMaxLikes,
        postWithMaxComments,
      ]);

      this.dataSource.paginator = this.paginator;
    }
  }

  private getPostWithMaxLikes(posts: any[]): any {
    return posts.reduce((maxLikesPost, currentPost) => {
      if (currentPost.like_count > maxLikesPost.like_count) {
        return currentPost;
      }
      return maxLikesPost;
    });
  }

  private getPostWithMaxComments(posts: any[]): any {
    return posts.reduce((maxCommentsPost, currentPost) => {
      if (currentPost.comentario__post_count > maxCommentsPost.comentario__post_count) {
        return currentPost;
      }
      return maxCommentsPost;
    });
  }
}
