export interface IClientRequest {
  name: string;
  email: string;
  password: string;
}

export interface IClientPatchRequest {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}
