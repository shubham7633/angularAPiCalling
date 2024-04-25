import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map operator

// Define Product model interface
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  // Add more properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map(data => {
        console.log('Products received:', data);
        return data;
      })
    );
  }
}
