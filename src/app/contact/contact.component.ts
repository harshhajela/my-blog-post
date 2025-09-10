import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate('800ms ease-out', style({
        opacity: 1
      })))
    ]),
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      transition('void => *', animate('800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({
        opacity: 1,
        transform: 'translateY(0)'
      })))
    ]),
    trigger('slideInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      transition('void => *', animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({
        opacity: 1,
        transform: 'translateY(0)'
      })))
    ])
  ]
})
export class ContactComponent {

}
