import CreateClinicService from "../services/CreateClinicService";
import FetchClinicsService from "../services/FetchClinicsService";
import FetchClinicByIdService from "../services/FetchClinicByIdService";
import UpdateClinicByIdService from "../services/UpdateClinicByIdService";
import DeleteClinicService from "../services/DeleteClinicService";

interface CreateClinicBody {
  name: string;
  specialty_id: string;
  address: object;
  phone: string;
}

class ClinicController {
  async create(req: any, res: any) {
    try {
      const { name, specialty_id, address, phone } =
        req.body as CreateClinicBody;

      const clinic = await CreateClinicService.execute({
        name,
        specialty_id,
        address,
        phone,
      });

      return res.status(201).json(clinic);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findAll(req: any, res: any) {
    try {
      const { specialty_id } = req.query;
      const filters = { specialty_id };
      const clinics = (await FetchClinicsService.execute(filters)) || {
        message: "Sem clínicas cadastradas...",
      };

      return res.status(200).json(clinics);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findById(req: any, res: any) {
    try {
      const { id } = req.params;
      const clinic = await FetchClinicByIdService.execute(id as string);

      return res.status(200).json(clinic);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async path(req: any, res: any) {
    try {
      const { id } = req.params;

      const clinic = await UpdateClinicByIdService.execute(id, req.body);

      return res.status(200).json(clinic);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: any, res: any) {
    try {
      const { id } = req.params;
      const clinic = await DeleteClinicService.execute(id);

      return res.status(200).json(clinic);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new ClinicController();
