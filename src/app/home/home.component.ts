import { Observable } from 'rxjs';
import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
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
    trigger('slideInLeft', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-50px)'
      })),
      transition('void => *', animate('1000ms 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({
        opacity: 1,
        transform: 'translateX(0)'
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
    ]),
    trigger('bounce', [
      transition('* => *', animate('2s ease-in-out', keyframes([
        style({ transform: 'translateY(0)', offset: 0 }),
        style({ transform: 'translateY(-10px)', offset: 0.5 }),
        style({ transform: 'translateY(0)', offset: 1 })
      ])))
    ])
  ]
})
export class HomeComponent implements OnInit {

  blogPosts$: Observable<any> | undefined;
  blogPostsData: any[] | undefined;
  totalBlogs: number | undefined;
  
  heroState = 'in';
  blogsState = 'in';
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

  scrollToBlogs(): void {
    document.getElementById('blogs')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }

  getAnimationState(index: number): string {
    return this.cardAnimationStates[index] || 'in';
  }

  onCardHover(index: number): void {
    // Can be used for additional hover animations if needed
  }

  onCardLeave(index: number): void {
    // Can be used for additional hover animations if needed
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
