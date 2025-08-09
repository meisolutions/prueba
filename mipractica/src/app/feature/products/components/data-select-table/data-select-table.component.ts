import { Component, inject, OnInit } from "@angular/core";
import { ProductosService } from "../../https/product.http";
import { IProduct } from "../../interfaces/product.interface";
import { Subscription } from "rxjs";
import { CommonService } from "../../servicios/common.service";

@Component({
  selector: 'app-data-select',
  templateUrl: './data-select.html',
  styleUrls: []
})

export class DataSelectComponent implements OnInit{
  subscriptionProduct=  new Subscription();

//   commonService = inject(CommonService);

constructor(
    // No se puede injectar mas de 5
    private commonService: CommonService
  ) { }

    ngOnInit(): void {
          this.subscriptionProduct = this.commonService.currentMessage.subscribe(message => {
       console.log('**mensaje al padre***', message);
    });
    }

}