import Rating from "../../../../schemas/Rating";

class DeleteRatingService {
  async execute(id: string) {
    const rating = await Rating.findByIdAndDelete(id);
    return rating;
  }
}

export default new DeleteRatingService();
