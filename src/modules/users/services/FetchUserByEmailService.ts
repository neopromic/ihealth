import User from "../../../schemas/User";

class FetchUserByEmailService {
  async execute(email: string) {
    const user = await User.findOne({ email }).exec();
    return user;
  }
}

export default new FetchUserByEmailService();
