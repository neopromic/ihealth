import { NextFunction, Response, Request  } from "express";
import RatingSchema from "../../../schemas/Rating";

export default class RatingController {
    private res: Response;
    private req: Request;
    private next: NextFunction;

    constructor(res: Response, req: Request, next: NextFunction) {
        this.res = res;
        this.req = req;
        this.next = next;
    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        const ratings = {
            user_id: req.params.user_id || 0,
            note: req.params.note || 0,
            comment: req.params.comment || 0,
            created_date: req.params.created_date || 0,
        }
        return this.res.status(201).json(ratings);
    }

    public post = async (req: Request, res: Response, next: NextFunction) => {
        const {user_id, note, comment, created_date} = req.body;

        if (!user_id || !note || !comment || !created_date) {
            return this.res.status(400).json({message: "todos os campos são obrigatórios"});
        }

        const newRating = new RatingSchema({
            user_id,
            note,
            comment,
            created_date
        });

        try {
            const savedRating = await newRating.save();
            return this.res.status(201).json(savedRating);
        } catch (err) {
            return this.res.status(500).json({message: "Erro ao tentar adicionar"});
        }

    }

    public put = async (req: Request, res: Response, next: NextFunction) => {
        const ratingId = req.params.id;
        const { note, comment, created_date } = req.body;

        if (!ratingId) {
            return this.res.status(400).json({message: "id da avaliação é obrigatório"});
        }

        try {
            const rating = await RatingSchema.findById(ratingId);
            if (!rating) {
                return this.res.status(404).json({message: "avaliação não encontrada"});
            }

            rating.note = note !== undefined ? note : rating.note;
            rating.created_date = created_date;
            rating.comment = comment !== undefined ? comment : rating.comment;

            const updatedRating = await rating.save();

            return this.res.status(200).json(updatedRating);
        } catch (err) {
            return this.res.status(500).json({message: "Erro ao tentar atualizar"});
        }
    }

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        const ratingId = req.params.id;

        if (!ratingId) {
            return this.res.status(404).json({message: "id da avaliação é obrigatório"});
        }

        try {
            const deleteRating = await RatingSchema.findByIdAndDelete(ratingId);
            if (!deleteRating) {
                return this.res.status(404).json({message: "avaliação não encontrada"});
            }
            return this.res.status(200).json({message: "avaliação deletada com sucesso"});
        } catch (err) {
            return this.res.status(500).json({message: "Erro ao tentar deletar"});
        }
    }

}
