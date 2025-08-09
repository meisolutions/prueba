import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // Estado inicial:
  private messageSource = new BehaviorSubject<any>('vacio');
  // Observable público para que otros componentes se suscriban
  currentMessage = this.messageSource.asObservable();

  // Método para setear
  setProduct(value: any): void {
    this.messageSource.next(value);
  }

  // Método para obtener el estado actual (sin necesidad de suscribirse)
  getProduct() {
    return this.messageSource.getValue();
  }
}