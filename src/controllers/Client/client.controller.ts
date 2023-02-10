import { Request, Response } from "express";
import addingProductService from "../../services/Client/addingProduct.service";
import createClientService from "../../services/Client/createClient.service";
import deleteClientService from "../../services/Client/deleteClient.service";
import listClientService from "../../services/Client/listClient.service";
import listClientById from "../../services/Client/listClientById.service";
import updateClientService from "../../services/Client/updateClient.service";

export class ClientControllers {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const client = await createClientService({ name, email, password });

    return res.status(201).json(client);
  }

  async list(req: Request, res: Response) {
    const clients = await listClientService();

    return res.json(clients);
  }

  async listById(req: Request, res: Response) {
    const { id } = req.params;

    const client = await listClientById(id);

    return res.json(client);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteClientService(id);

    return res.json({
      message: "Client deleted",
    });
  }

  async patch(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updatedClient = await updateClientService({
      id,
      name,
      email,
      password,
    });

    return res.json(updatedClient);
  }

  async addingProduct(req: Request, res: Response) {
    const { id, idUser } = req.params;

    const product = await addingProductService(id, idUser);

    return res.json(product);
  }
}
