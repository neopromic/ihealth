import Specialty from "../../../schemas/Specialty";

interface ICreateSpecialtyDto {
  name: string;
}

class CreateSpecialtyService {
  async execute(createSpecialtyService: ICreateSpecialtyDto) {
    return new Specialty({
      ...createSpecialtyService,
    }).save();
  }
}

export default new CreateSpecialtyService();
