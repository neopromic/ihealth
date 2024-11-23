import Payment from "../../../schemas/Payment";

class DeletePaymentService {
  async execute(id: string) {
    const payment = await Payment.findByIdAndDelete(id);
    return payment;
  }
}

export default new DeletePaymentService();
