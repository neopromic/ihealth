import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../types/env";

interface TokenPayload {
  id: string;
  type: "patient" | "doctor";
}

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Token não fornecido" });
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2) {
      return res.status(401).json({ message: "Token erro de formato" });
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ message: "Token mal formatado" });
    }

    jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token inválido" });
      }

      req.user = decoded as TokenPayload;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro na autenticação" });
  }
};

export const doctorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.type !== "doctor") {
    return res.status(403).json({
      message: "Acesso negado - Apenas médicos podem acessar este recurso",
    });
  }
  next();
};
