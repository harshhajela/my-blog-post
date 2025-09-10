import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
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
    trigger('slideInLeft', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-30px)'
      })),
      transition('void => *', animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({
        opacity: 1,
        transform: 'translateX(0)'
      })))
    ]),
    trigger('slideInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('void => *', animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({
        opacity: 1,
        transform: 'translateY(0)'
      })))
    ])
  ]
})
export class BlogPostComponent implements OnInit {

  blogPost$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.blogPost$ = this.contentfulService.getEntryById(id);
      }
    );
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  calculateReadTime(content: any): number {
    if (!content) return 1;
    
    const text = typeof content === 'string' ? content : JSON.stringify(content);
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    
    return readTime || 1;
  }

  scrollToTop(): void {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }
}
