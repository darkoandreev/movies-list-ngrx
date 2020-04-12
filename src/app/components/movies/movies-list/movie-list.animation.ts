import { AnimationTriggerMetadata, trigger, transition, style, group, animate } from '@angular/animations';

export const movieListAnimation: {
    readonly animateList: AnimationTriggerMetadata;
  } = {
    animateList: trigger('itemAnim', [
        transition(':enter', [
          style({transform: 'translateY(300%)'}),
          animate(550)
        ]),
        transition(':leave', [
          group([
            animate('0.2s ease', style({
              transform: 'translate(150px,25px)',
              opacity: 0.5
            })),
            animate('0.5s 0.2s ease', style({
              opacity: 0
            }))
          ])
        ])
      ])
  }