import { trigger, state, style, animate, transition } from '@angular/animations';

export const animaciones = [

  trigger('cambioFondo', [
    state('normal', style({
      backgroundColor: 'red',
      transform: 'scale(1)'
    })),
    state('resaltado', style({
      backgroundColor: 'yellow',
      transform: 'scale(1.2)'
    })),
    transition('normal <=> resaltado', animate('300ms ease-in-out'))
  ]),
  trigger('expandirAnimacion', [
    state('inicial', style({
      width: '10px' // Ancho inicial del div
    })),
    state('final', style({
       // Ancho final del div utilizando flexBasis
      flexGrow: 1 // Establecer flexGrow a 1 para permitir la expansión
    })),
    transition('inicial => final', animate('0.3s')) // Duración de la animación
  ]),
  trigger('opacidadAnimacion', [
    state('visible', style({
      opacity: 1 // Opacidad final del div
    })),
    state('oculto', style({
      opacity: 0 // Opacidad inicial del div
    })),
    transition('oculto => visible', animate('500ms')),
    transition('visible => oculto', animate('500ms'))
  ]),
  trigger('aparecerAnimacion', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('500ms', style({ transform: 'translateX(0)' }))
    ])
  ]),
  trigger('desplegarAnimacion', [
    state('i', style({
      width: '300px' // Ancho inicial del div
    })),
    state('f', style({
      width: '20px' // Ancho final del div
    })),
    transition('inicial => final', animate('0.3s')) // Duración de la animación
  ])


];
