import { Component, Input } from '@angular/core';
import { Search } from '../search';



@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {
  @Input() pages: Search[] = [];
  xss = '<img src="" onerror="alert(1)" />';
 
}
