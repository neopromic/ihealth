import Clinic from "../../../../schemas/Clinic";

class FetchClinicsService {
  async execute(filters: any = []) {
    let query: any = {};

    if (filters.name) {
      query.name = { $regex: filters.name, $options: "i" };
    }

    return Clinic.find(query).sort("-created_date").exec();
  }
}

export default new FetchClinicsService();
