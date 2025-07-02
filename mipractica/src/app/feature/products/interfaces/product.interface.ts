export interface IProduct {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
  imagenUrl: string;
}

export interface IProductList {
    product: IProduct[];
}
