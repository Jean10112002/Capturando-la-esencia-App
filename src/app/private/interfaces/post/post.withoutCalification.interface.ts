// Generated by https://quicktype.io

import { ComentarioPost, Like } from "./post.interface";

export interface PostWithoutCalificationI {
  Post: Post;
}

export interface Post {
  current_page:   number;
  data:           Datum[]|Datum;
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  null;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface Datum {
  id:                number;
  titulo:            string;
  descripcion:       string;
  lugar:             string;
  ciudad:            string;
  fecha:             string;
  calificacionFinal: null;
  estado:            number;
  imagen_id:         number;
  categoria_id:      number;
  participante_id:   number;
  participante:      Participante;
  categoria:         Categoria;
  imagen:            Imagen;
  like:              Like|null;
  calificacion:      any[];
  comentario__post:  ComentarioPost;
}

export interface Categoria {
  id:     number;
  nombre: string;
}

export interface Imagen {
  id:         number;
  imagen_url: string;
  id_imagen:  string;
}

export interface Participante {
  id:       number;
  nombres:  string;
  cedula:   string;
  email:    string;
  semestre: string;
  telefono: string;
  rol:      string;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
