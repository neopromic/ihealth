import Payment from "../../../schemas/Payment";

class FetchPaymentByIdService {
  async execute(id: string) {
    const payment = await Payment.findById(id);
    return payment;
  }
}

export default new FetchPaymentByIdService();
