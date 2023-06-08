import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PostAllPaginateI, PostCreateI } from '../interfaces/post/post.interface';
import { Observable } from 'rxjs';
import { PostSearchByCategoryWithoutCalificationI } from '../interfaces/post/post.search-categoria-sincalificar.interface';
import { PostSearchByCategoryI } from '../interfaces/post/post.search-by-categoria.interface';
import { PostWithoutCalificationI } from '../interfaces/post/post.withoutCalification.interface';

@Injectable()
export class PostService {
  private readonly api = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}
  getPosts():Observable<PostAllPaginateI>{
    return this.http.get<PostAllPaginateI>(`${this.api}post`)
  }
  createPost(post:PostCreateI){
    return this.http.post(`${this.api}post`,post);
  }
  getPostsByCategoryWithoutCalification(category_id:number):Observable<PostSearchByCategoryWithoutCalificationI>{
    return this.http.get<PostSearchByCategoryWithoutCalificationI>(`${this.api}post/search-categoria-sincalificar/${category_id}`)
  }
  getPostsByCategory(category_id:number):Observable<PostSearchByCategoryI>{
    return this.http.get<PostSearchByCategoryI>(`${this.api}search-categoria/${category_id}`);
  }
  getPostsWithoutCalificacion():Observable<PostWithoutCalificationI>{
    return this.http.get<PostWithoutCalificationI>(`${this.api}post/search-sincalificar`);
  }
  deletePost(id:number){
    return this.http.delete(`${this.api}post/${id}`)
  }

}
