import Rating from "../../../../schemas/Rating";

class FetchRatingService {
  async execute() {
    const rating = await Rating.find();
    return rating;
  }
}

export default new FetchRatingService();
