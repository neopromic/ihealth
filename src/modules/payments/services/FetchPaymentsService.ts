import Payment from "../../../schemas/Payment";

class FetchPaymentsService {
  async execute() {
    const paymments = await Payment.find();
    return paymments;
  }
}

export default new FetchPaymentsService();
