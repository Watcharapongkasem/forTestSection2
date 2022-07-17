import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  categories = [];
  tmp = [];
  inputText: string = '';
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    lastValueFrom(this.http.get('https://api.publicapis.org/categories')).then(
      (res: any) => {
        console.log(res);
        this.categories = res.categories;
        this.tmp = res.categories;
      }
    );
  }

  InputChanged(event: any) {
    console.log(event);
    this.categories = this.tmp;
    this.categories = this.categories.filter((f: any) => {
      return f.indexOf(event) != -1;
    });
  }
}
