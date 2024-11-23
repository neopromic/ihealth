import Clinic from "../../../../schemas/Clinic";

class UpdateByIdService {
  async execute(id: string, updateClinicDto: any) {
    const clinic = await Clinic.findByIdAndUpdate(id, updateClinicDto, {
      new: true,
    });
    return clinic;
  }
}

export default new UpdateByIdService();
