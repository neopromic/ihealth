import CreateRatingService from "../services/rating/CreateRatingService";
import FetchRatingService from "../services/rating/FetchRatingService";
import UpdateRatingService from "../services/rating/UpdateRatingService";
import DeleteRatingService from "../services/rating/DeleteRatingService";

interface CreateRatingBody {
  user_id: string;
  clinic_id: string;
  note: string;
  comment: string;
}

class RatingController {
  async create(req: any, res: any) {
    try {
      const { user_id, clinic_id, note, comment } =
        req.body as CreateRatingBody;

      const rating = await CreateRatingService.execute({
        user_id,
        clinic_id,
        note,
        comment,
      });

      return res.status(201).json(rating);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async findAll(req: any, res: any) {
    try {
      const rating = (await FetchRatingService.execute()) || {
        message: "Sem avaliações cadastradas...",
      };

      return res.status(200).json(rating);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async path(req: any, res: any) {
    try {
      const { id } = req.params;

      const rating = await UpdateRatingService.execute(id, req.body);

      return res.status(200).json(rating);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async delete(req: any, res: any) {
    try {
      const { id } = req.params;
      const rating = await DeleteRatingService.execute(id);

      return res.status(200).json(rating);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new RatingController();
