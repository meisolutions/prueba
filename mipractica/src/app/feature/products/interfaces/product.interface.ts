export interface IProduct {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
}

export interface IProductList {
    product: IProduct[];
}
