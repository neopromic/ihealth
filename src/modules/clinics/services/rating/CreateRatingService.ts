import Rating from "../../../../schemas/Rating";

interface CreateRatingDto {
  user_id: string;
  clinic_id: string;
  note: string;
  comment: string;
}

class CreateRatingService {
  async execute(createRatingService: CreateRatingDto) {
    return new Rating({
      ...createRatingService,
      created_date: new Date(),
    }).save();
  }
}

export default new CreateRatingService();
