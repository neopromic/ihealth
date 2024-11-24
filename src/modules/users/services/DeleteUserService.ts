import User from "../../../schemas/User";

class DeleteUserService {
  async execute(id: string) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}

export default new DeleteUserService();
