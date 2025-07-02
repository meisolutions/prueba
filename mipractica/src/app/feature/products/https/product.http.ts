import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IProduct } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos'; // Cambia esto por tu backend real

  constructor(private http: HttpClient) {}

    // Lista
  getProducto(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}`);
  }

//   obtiene por Id
  getProductoById(id?: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }


}