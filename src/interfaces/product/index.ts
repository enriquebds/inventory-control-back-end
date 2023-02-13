export interface IProductRequest {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface IProductList {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  managerId?: string | null | undefined;
}

export interface IProductPatchRequest {
  id?: string;
  name?: string;
  category?: string;
  price?: number;
  description?: string;
}
