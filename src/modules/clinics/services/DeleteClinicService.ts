import Clinic from "../../../schemas/Clinic";

class DeleteClinicService {
  async execute(id: string) {
    const clinic = await Clinic.findByIdAndDelete(id);
    return clinic;
  }
}

export default new DeleteClinicService();
