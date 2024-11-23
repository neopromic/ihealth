import CreateSpecialtyService from "../services/CreateSpecialtyService";
import FetchSpecialtiesService from "../services/FetchSpecialtiesService";
import FetchSpecialtyByIdService from "../services/FetchSpecialtyByIdService";
import UpdateSpecialtyService from "../services/UpdateSpecialtyService";
import DeleteSpecialtyService from "../services/DeleteSpecialtyService";

interface CreateSpecialtyBody {
  name: string;
}

class SpecialtyController {
  async create(req: any, res: any) {
    try {
      const { name } = req.body as CreateSpecialtyBody;

      const specialty = await CreateSpecialtyService.execute({
        name,
      });

      return res.status(201).json(specialty);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findAll(req: any, res: any) {
    try {
      const specialties = (await FetchSpecialtiesService.execute()) || {
        message: "Sem especialidades cadastradas...",
      };

      return res.status(200).json(specialties);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findById(req: any, res: any) {
    try {
      const { id } = req.params;
      const specialty = await FetchSpecialtyByIdService.execute(id as string);

      return res.status(200).json(specialty);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async path(req: any, res: any) {
    try {
      const { id } = req.params;

      const specialty = await UpdateSpecialtyService.execute(id, req.body);

      return res.status(200).json(specialty);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: any, res: any) {
    try {
      const { id } = req.params;
      const specialty = await DeleteSpecialtyService.execute(id);

      return res.status(200).json(specialty);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new SpecialtyController();
