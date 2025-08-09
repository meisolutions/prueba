import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '@servicios/common.service';
import { ResourceData } from '../../interfaces/resource.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;

  private subscription!: Subscription;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.subscription = this.commonService.currentMessage.subscribe(
      (product: ResourceData | null) => {
        if (product) {
          this.productName = product.name ?? '';
          this.productDescription = product.pantone_value ?? '';
          this.productPrice = product.year ? product.year * 100 : 0;
        } else {
          this.resetValues();
        }
      }
    );
  }

  private resetValues(): void {
    this.productName = '';
    this.productDescription = '';
    this.productPrice = 0;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


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

