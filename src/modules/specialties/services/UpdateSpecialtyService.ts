import Specialty from "../../../schemas/Specialty";

class UpdateSpecialtyService {
  async execute(id: string, updateSpecialtyDto: any) {
    const specialty = await Specialty.findByIdAndUpdate(
      id,
      updateSpecialtyDto,
      {
        new: true,
      }
    );
    return specialty;
  }
}

export default new UpdateSpecialtyService();
