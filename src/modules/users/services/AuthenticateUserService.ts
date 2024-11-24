import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import auth from "../../../config/auth";
import AppError from "../../../errors/AppError";
import { UserData } from "../../../schemas/User";
import FetchUserByEmailService from "./FetchUserByEmailService";

interface IAuthenticateUserDto {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: UserData;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserDto): Promise<Response> {
    const user = await FetchUserByEmailService.execute(email);

    if (!user) {
      throw new AppError("Credenciais incorretas", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Credenciais incorretas", 401);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      expiresIn,
      subject: String(user._id),
    });

    return { token, user };
  }
}

export default new AuthenticateUserService();
