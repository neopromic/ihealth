import Specialty from "../../../schemas/Specialty";

class DeleteSpecialtyService {
  async execute(id: string) {
    const specialty = await Specialty.findByIdAndDelete(id);
    return specialty;
  }
}

export default new DeleteSpecialtyService();
