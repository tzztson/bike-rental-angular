import { animate, state, style, transition, trigger } from '@angular/animations';

export const stepperAnimations = {
  horizontalStepTransition: trigger('stepTransition', [
    state('previous', style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, display: 'none' })),
    state('current', style({ transform: 'translate3d(0, 0, 0)', opacity: 1 })),
    state('next', style({ transform: 'translate3d(100%, 0, 0)', opacity: 0, display: 'none' })),
    transition(':enter', animate(0)),
    transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
  ]),
};
