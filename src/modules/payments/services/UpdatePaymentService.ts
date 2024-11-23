import Payment from "../../../schemas/Payment";

class UpdatePaymentService {
  async execute(id: string, updatePaymentDto: any) {
    const payment = await Payment.findByIdAndUpdate(id, updatePaymentDto, {
      new: true,
    });
  }
}

export default new UpdatePaymentService();
