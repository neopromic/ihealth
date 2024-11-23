import Payment from "../../../schemas/Payment";

interface CreatePaymentDto {
  consultation_id: string;
  value: number;
  status: "pendent" | "paid" | "canceled";
}

class CreatePaymentService {
  async execute(createPaymentService: CreatePaymentDto) {
    return new Payment({
      ...createPaymentService,
      created_date: new Date(),
    }).save();
  }
}

export default new CreatePaymentService();
