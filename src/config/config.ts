import { environment } from 'src/environments/environment';

export const config = {
  /* apiUrl: 'http://127.0.0.1:8000/api/', */
  apiUrl:environment.apiUrl,
  avatarUrl: environment.avatarUrl,
  /*startCalificar:"2023-08-07 00:00:00",
  endCalificar:"2023-08-16 23:59:59",
  startPhotoParticipante:"2023-07-17 00:00:00",
  endPhotoParticipante:"2023-08-04 23:59:59",
  startReporte:"2023-08-18 00:00:00" */
  startCalificar: '2023-06-11 00:00:00',
  endCalificar: '2023-07-16 23:59:59',
  startPhotoParticipante: '2023-07-14 22:25:00',
  endPhotoParticipante: '2023-07-14 22:30:00',
  startReporte: '2023-06-19 08:00:00',
};
