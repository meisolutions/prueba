import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IProduct } from '../interfaces/product.interface'
import { Resource } from '../../Resourse/interfaces/resource.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:3000/resourse'; // Cambia esto por tu backend real

  constructor(private http: HttpClient) {}

    // Lista
  getResourse(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.apiUrl}`);
  }

//   obtiene por Id
  getProductoById(id?: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }


}