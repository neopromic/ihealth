import Rating from "../../../../schemas/Rating";

class UpdateRatingService {
  async execute(id: string, updateRatingDto: any) {
    const rating = await Rating.findByIdAndUpdate(id, updateRatingDto, {
      new: true,
    });
  }
}

export default new UpdateRatingService();
