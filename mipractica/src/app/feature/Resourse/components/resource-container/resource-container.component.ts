import { Component } from '@angular/core';
import { ResourceData } from '../../interfaces/resource.interface';

@Component({
  selector: 'app-resource-container',
  templateUrl: './resource-container.component.html',
  styleUrls: ['./resource-container.component.scss']
})
export class ResourceContainerComponent {
  selectedProduct: ResourceData | null = null;

  onProductSelected(product: ResourceData): void {
    this.selectedProduct = product;
  }
} 