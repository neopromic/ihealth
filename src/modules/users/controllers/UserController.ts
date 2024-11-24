import CreateUserService from "../services/CreateUserService";
import FetchUsersService from "../services/FetchUsersService";
import FetchUserByIdService from "../services/FetchUserByIdService";
import FetchUserByEmailService from "../services/FetchUserByEmailService";
import UpdateUserService from "../services/UpdateUserService";
import DeleteUserService from "../services/DeleteUserService";
import AppError from "../../../errors/AppError";
import { hash } from "bcryptjs";

interface CreateUserBody {
  name: string;
  email: string;
  password: string;
  phone: string;
  type: "patient" | "doctor";
  clinic_id?: string;
}

class UserController {
  async create(req: any, res: any) {
    try {
      const { name, email, password, phone, type, clinic_id } =
        req.body as CreateUserBody;

      const alreadyExists = !!(await FetchUserByEmailService.execute(email));
      if (alreadyExists) {
        throw new AppError("O e-mail já está sendo utilizado.", 401);
      }

      const password_hash = await hash(password, 8);
      const user = await CreateUserService.execute({
        name,
        email,
        password: password_hash,
        phone,
        type,
        clinic_id,
      });

      return res.status(201).json(user);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findAll(req: any, res: any) {
    try {
      const users = (await FetchUsersService.execute()) || {
        message: "Sem usuários cadastrados...",
      };

      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findById(req: any, res: any) {
    try {
      const { id } = req.params;
      const user = await FetchUserByIdService.execute(id as string);

      // @ts-expect-error
      delete user?.password;
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async path(req: any, res: any) {
    try {
      const { id } = req.params;

      const user = await UpdateUserService.execute(id, req.body);

      // @ts-expect-error
      delete user?.password;
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: any, res: any) {
    try {
      const { id } = req.params;
      const user = await DeleteUserService.execute(id);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new UserController();
