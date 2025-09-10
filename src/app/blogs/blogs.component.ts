import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
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
export class BlogsComponent implements OnInit {

  blogPosts$: Observable<any> | undefined;
  cardAnimationStates: string[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
    
    this.blogPosts$.subscribe(data => {
      if (data?.items) {
        this.cardAnimationStates = new Array(data.items.length).fill('in');
      }
    });
  }

  getAnimationState(index: number): string {
    return this.cardAnimationStates[index] || 'in';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
