import { Component, OnInit } from "@angular/core";
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
