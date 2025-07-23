import { Component, Inject, OnInit } from "@angular/core";
import { ProductosService } from "../../https/product.http";
import { IProduct, IProductList } from "../../interfaces/product.interface";
import { Subscription } from "rxjs";
import { ResourceService } from "../../https/resourse.http";

@Component({
  selector: 'arn-table-resourse',
  templateUrl: './resourse.html'
})

export class ResourceComponent implements OnInit {
  resourse: any;

  constructor(
    // No se puede injectar mas de 5
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.resourceService.getResourse().subscribe({
      next: (data) => {
        this.resourse = data;
        console.log('mi servicio', data)
      },
      error: (err) => {
        console.error('Error al obtener:', err);
      }
    });
  }


}
