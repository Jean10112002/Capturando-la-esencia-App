// Generated by https://quicktype.io

export interface ParticipanteSearchCedulaI {
  participante: Participante[] | Participante;
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


// Generated by https://quicktype.io



// Generated by https://quicktype.io

export interface ParticipanteShowI {
  participante: ParticipanteWithPostI;
}

 interface ParticipanteWithPostI {
  id:       number;
  nombres:  string;
  cedula:   string;
  email:    string;
  semestre: string;
  telefono: string;
  rol:      string;
  post:     PostI[] | PostI;
}

 interface PostI {
  id:                number;
  titulo:            string;
  descripcion:       string;
  lugar:             string;
  ciudad:            string;
  fecha:             string;
  calificacionFinal: number;
  estado:            number;
  imagen_id:         number;
  categoria_id:      number;
  participante_id:   number;
  imagen:            ImagenI;
  categoria:         CategoriaI;
}

 interface CategoriaI {
  id:     number;
  nombre: string;
}

 interface ImagenI {
  id:         number;
  imagen_url: string;
  id_imagen:  string;
}


