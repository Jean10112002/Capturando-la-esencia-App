export interface CalificacionBodyI{
  contenido:number,
  organizacion_estatica:number,
  tecnica:number,
  creatividad:number,
  post_id:number,
}


export interface CalificacionReporte {
  Categorias:            Categoria[];
  mayorLikesComentarios: MayorLikesComentario[];
}

export interface Categoria {
  id:     number;
  nombre: string;
  post:   MayorLikesComentario[];
}

export interface MayorLikesComentario {
  id:                      number;
  titulo:                  string;
  descripcion:             string;
  lugar:                   string;
  ciudad:                  string;
  fecha:                   string;
  calificacionFinal:       number;
  estado:                  number;
  imagen_id:               number;
  categoria_id:            number;
  participante_id:         number;
  participante:            Participante;
  calificacion?:           Calificacion[];
  like_count?:             number;
  comentario__post_count?: number;
}

export interface Calificacion {
  id:                    number;
  total:                 number;
  contenido:             number;
  organizacion_estatica: number;
  creatividad:           number;
  tecnica:               number;
  post_id:               number;
  user_id:               number;
  user:                  User;
}

export interface User {
  id:       number;
  nombre:   string;
  apellido: string;
  telefono: string;
  email:    string;
  rol:      string;
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
