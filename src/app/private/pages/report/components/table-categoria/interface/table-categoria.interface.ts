export interface ColumnasElements {
  titulo: string;
  nombres: string;
  cedula: string;
  calificacion: number;
  jurado:JuradoI,
  /* calificaciones:CalificacionesJuradoReporteI */
}
interface JuradoI{
  nombre_jurado:string,
  apellido_jurado:string,
}
interface CalificacionesJuradoReporteI{
  total:number,
  contenido:number,
  organizacion_estatica:number,
  creatividad:number,
  tecnica:number
}
