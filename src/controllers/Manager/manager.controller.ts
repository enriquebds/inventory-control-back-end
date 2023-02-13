import { Request, Response } from "express";
import createManagerService from "../../services/Manager/createManager.service";
import deleteManagerService from "../../services/Manager/deleteManager.service";
import listManagerService from "../../services/Manager/listManager.service";
import listManagerById from "../../services/Manager/listManagerById.service";
import updateManagerService from "../../services/Manager/updateManager.service";

export class ManagerControllers {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const manager = await createManagerService({ name, email, password });

    return res.status(201).json(manager);
  }

  async list(req: Request, res: Response) {
    const managers = await listManagerService();

    return res.json(managers);
  }

  async listById(req: Request, res: Response) {
    const { id } = req.params;

    const manager = await listManagerById(id);

    return res.json(manager);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteManagerService(id);

    return res.json({
      message: "Manager deleted",
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updatedManager = await updateManagerService({
      id,
      name,
      email,
      password,
    });

    return res.json(updatedManager);
  }
}
