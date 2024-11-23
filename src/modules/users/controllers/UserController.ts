import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../schemas/User";
import { env } from "../../../types/env";

export class UserController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password, phone, type } = req.body;

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "Email já cadastrado" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        type,
        created_date: new Date(),
      });

      const token = jwt.sign(
        {
          id: user._id,
          type: user.type,
        },
        env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(201).json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          type: user.type,
        },
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar usuário" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Email ou senha inválidos" });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Email ou senha inválidos" });
      }

      const token = jwt.sign(
        {
          id: user._id,
          type: user.type,
        },
        env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          type: user.type,
        },
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao fazer login" });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const user = await User.findById(req?.user?.id).select("-password");
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar perfil" });
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const { name, phone } = req.body;

      const user = await User.findByIdAndUpdate(
        req?.user?.id,
        {
          name,
          phone,
        },
        { new: true }
      ).select("-password");

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar perfil" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndDelete(req?.user?.id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao deletar usuário" });
    }
  }
}
