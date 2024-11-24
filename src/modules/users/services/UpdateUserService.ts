import User from "../../../schemas/User";

class UpdateUserService {
  async execute(id: string, updateUserDto: any) {
    const user = await User.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return user;
  }
}

export default new UpdateUserService();
