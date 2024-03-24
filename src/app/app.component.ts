import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { Search } from './search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pages: Search[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
