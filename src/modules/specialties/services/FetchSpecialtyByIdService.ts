import Specialty from "../../../schemas/Specialty";

class FetchSpecialtyByIdService {
  async execute(id: string) {
    const specialty = await Specialty.findById(id);
    return specialty;
  }
}

export default new FetchSpecialtyByIdService();
