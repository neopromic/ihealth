import CreatePaymentService from "../services/CreatePaymentService";
import FetchPaymentsService from "../services/FetchPaymentsService";
import FetchPaymentByIdService from "../services/FetchPaymentByIdService";
import UpdatePaymentService from "../services/UpdatePaymentService";
import DeletePaymentService from "../services/DeletePaymentService";

interface CreatePaymentBody {
  consultation_id: string;
  value: number;
  status: "pendent" | "paid" | "canceled";
}

class PaymentController {
  async create(req: any, res: any) {
    try {
      const { consultation_id, value, status } = req.body as CreatePaymentBody;

      const payment = await CreatePaymentService.execute({
        consultation_id,
        value,
        status,
      });

      return res.status(201).json(payment);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findAll(req: any, res: any) {
    try {
      const payments = (await FetchPaymentsService.execute()) || {
        message: "Sem pagamentos cadastrados...",
      };

      return res.status(200).json(payments);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findById(req: any, res: any) {
    try {
      const { id } = req.params;
      const payment = await FetchPaymentByIdService.execute(id as string);

      return res.status(200).json(payment);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async path(req: any, res: any) {
    try {
      const { id } = req.params;

      const payment = await UpdatePaymentService.execute(id, req.body);

      return res.status(200).json(payment);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: any, res: any) {
    try {
      const { id } = req.params;
      const payment = await DeletePaymentService.execute(id);

      return res.status(200).json(payment);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new PaymentController();
