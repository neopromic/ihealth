import { NextFunction } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";
import AppError from "../errors/AppError";

interface TokenPayload {
  sub: string;
}

export default function ensureAuthenticated(
  request: any,
  _response: any,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing.", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, auth.jwt.secret) as TokenPayload;

    request.user = {
      id: user_id,
    };

    return next();
  } catch (err) {
    throw new AppError("Invalid JWT token.", 401);
  }
}
