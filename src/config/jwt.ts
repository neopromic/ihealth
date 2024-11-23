import { env } from "../types/env";

export const jwtConfig = {
  secret: env.JWT_SECRET,
  expiresIn: "1d",
  algorithm: "HS256" as const,
};
