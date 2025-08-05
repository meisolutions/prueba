import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource, ResourceData } from './interfaces/resource.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:3000'; // URL de Mockoon

  constructor(private http: HttpClient) { }

  getResources(): Observable<Resource> {
    return this.http.get<Resource>(`${this.apiUrl}/resources`);
  }

  getResourceById(id: number): Observable<ResourceData> {
    return this.http.get<ResourceData>(`${this.apiUrl}/resources/${id}`);
  }

  createResource(resource: ResourceData): Observable<ResourceData> {
    return this.http.post<ResourceData>(`${this.apiUrl}/resources`, resource);
  }

  updateResource(id: number, resource: ResourceData): Observable<ResourceData> {
    return this.http.put<ResourceData>(`${this.apiUrl}/resources/${id}`, resource);
  }

  deleteResource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/resources/${id}`);
  }
} 