import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'searchBar';
  searchTxt: string;
  completeData: ToDo[];
  searchArray: ToDo[];
  frequentlySearchedTxt: [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data: ToDo[]) => {
      this.completeData = data;
    });
  }

  fillTxt(txt) {
    this.searchArray = this.completeData.filter((e) => {
      return e.title.toLowerCase().includes(this.searchTxt.toLowerCase());
    });
    // }).sort((a, b) => {
    //   return a;
    // });
  }

  selectedSearchedTxt(item) {
    this.searchArray = [item];
  }
}
