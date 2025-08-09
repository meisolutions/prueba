import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceData } from '../../interfaces/resource.interface';
import { ResourceService } from '../../resource.http';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  @Output() productSelected = new EventEmitter<ResourceData>();
  
  resources: ResourceData[] = [];
  selectedProduct: ResourceData | null = null;
  total: number = 0;
  loading: boolean = false;

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.loading = true;
    this.resourceService.getResources().subscribe({
      next: (response) => {
        this.resources = response.data;
        this.calculateTotal();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading resources:', error);
        // Fallback data si la API no está disponible
        this.resources = [
          {
            id: 1,
            name: 'Laptop',
            year: 2023,
            color: '#4A90E2',
            pantone_value: 'Gamer'
          },
          {
            id: 2,
            name: 'Parlantes',
            year: 2022,
            color: '#7ED321',
            pantone_value: 'Buen volumen'
          },
          {
            id: 3,
            name: 'Iphone',
            year: 2024,
            color: '#F5A623',
            pantone_value: 'Pro Max'
          }
        ];
        this.calculateTotal();
        this.loading = false;
      }
    });
  }

  onProductSelect(product: ResourceData): void {
    this.selectedProduct = product;
    this.productSelected.emit(product);
  }

  private calculateTotal(): void {
    this.total = this.resources.reduce((sum, product) => {
      return sum + (product.year * 100);
    }, 0);
  }
} 