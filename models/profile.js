import mongoose from "mongoose"

const Schema = mongoose.Schema

const animeSchema = new Schema(
  {
    name: String,
    rate: Number,
    character: String,
  },
  {
    timestamps: true,
  }
)

const profileSchema = new Schema(
  {
    name: String,
    avatar: String,
    animes: [animeSchema],
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model("Profile", profileSchema)

export { Profile }
