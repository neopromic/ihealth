import AuthenticateUserService from "../services/AuthenticateUserService";

interface CreateSessionBody {
  email: string;
  password: string;
}

class SessionsController {
  async create(req: any, res: any) {
    const { email, password } = req.body as CreateSessionBody;

    const { token, user } = await AuthenticateUserService.execute({
      email,
      password,
    });

    // @ts-expect-error
    delete user.password;
    return res.json({ token, user });
  }
}

export default new SessionsController();
