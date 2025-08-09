import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResourceData } from '../../interfaces/resource.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnChanges {
  
  @Input() selectedProduct: ResourceData | null = null;
  
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['selectedProduct'] && this.selectedProduct) {
  //     this.productName = this.selectedProduct.name;
  //     this.productDescription = this.selectedProduct.pantone_value;
  //     this.productPrice = this.selectedProduct.year * 100;
  //   } else {
  //     // Reset values when no product is selected
  //     this.productName = '';
  //     this.productDescription = '';
  //     this.productPrice = 0;
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


} 