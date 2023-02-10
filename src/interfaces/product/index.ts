export interface IProductRequest {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface IProductList {
  id: string;
  name: string;
  category: string;
  description: string;
  managerId?: string | null | undefined;
}

export interface IProductPatchRequest {
  id?: string;
  name?: string;
  category?: string;
  description?: string;
}
