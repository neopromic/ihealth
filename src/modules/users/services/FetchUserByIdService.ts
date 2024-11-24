import User from "../../../schemas/User";

class FetchUserByIdService {
  async execute(id: string) {
    const user = await User.findById(id);
    return user;
  }
}

export default new FetchUserByIdService();
