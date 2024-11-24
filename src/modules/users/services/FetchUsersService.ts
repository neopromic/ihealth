import User from "../../../schemas/User";

class FetchUsersService {
  async execute() {
    const users = await User.find();
    return users;
  }
}

export default new FetchUsersService();
