import Clinic from "../../../../schemas/Clinic";

class FetchClinicByIdService {
  async execute(id: string) {
    const clinic = await Clinic.findById(id);
    return clinic;
  }
}

export default new FetchClinicByIdService();
