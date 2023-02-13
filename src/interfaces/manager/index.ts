export interface IManageRequest {
  name: string;
  email: string;
  password: string;
}

export interface IManagerPatchRequest {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface IManagerList {
  id: string;
  name: string;
  email: string;
}
