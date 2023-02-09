import mongoose from "mongoose"

const Schema = mongoose.Schema

const animeSchema = new Schema(
  {
    name: String,
    rate: Number,
  },
  {
    timestamps: true,
  }
)

const profileSchema = new Schema(
  {
    name: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model("Profile", profileSchema)

export { Profile }
