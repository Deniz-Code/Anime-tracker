import mongoose from "mongoose"

const Schema = mongoose.Schema

const animeSchema = new Schema(
  {
    name: String,
    cool: Boolean,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
)

const Anime = mongoose.model("Anime", animeSchema)

export { Anime }
