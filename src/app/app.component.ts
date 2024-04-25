import { Component, OnInit } from '@angular/core';
import { ApiService, Product } from './api.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'component-overview';
  products: Product[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
