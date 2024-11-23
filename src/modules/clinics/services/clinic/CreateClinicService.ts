import Clinic from "../../../../schemas/Clinic";

interface ICreateCliniDto {
  name: string;
  specialty_id: string;
  address: object;
  phone: string;
}

class CreateClinicService {
  async execute(createClinicService: ICreateCliniDto) {
    return new Clinic({
      ...createClinicService,
      created_date: new Date(),
    }).save();
  }
}

export default new CreateClinicService();
