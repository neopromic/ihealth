import Specialty from "../../../schemas/Specialty";

class FetchSpecialtiesService {
  async execute() {
    const specialties = await Specialty.find();
    return specialties;
  }
}

export default new FetchSpecialtiesService();
