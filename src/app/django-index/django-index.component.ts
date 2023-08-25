import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-django-index',
  templateUrl: './django-index.component.html',
  styleUrls: ['./django-index.component.css']
})
export class DjangoIndexComponent implements OnInit {
  indexContent: string = '';

  constructor(
    // private http: HttpClient
    ) { }

  ngOnInit(): void {
    // this.http.get('./././././formulaire/templates/index.html', { responseType: 'text' }).subscribe(content => {
    //   this.indexContent = content;
    // });
  }
}
