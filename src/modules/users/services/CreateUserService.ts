import User from "../../../schemas/User";

interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
  phone: string;
  type: "patient" | "doctor";
  clinic_id?: string;
}

class CreateUserService {
  async execute(createUserDto: ICreateUserDto) {
    return new User({
      ...createUserDto,
      created_date: new Date(),
    }).save();
  }
}

export default new CreateUserService();
