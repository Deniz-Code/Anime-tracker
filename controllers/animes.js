import { Anime } from "../models/anime.js"

function index(req, res) {
  Anime.find({})
    .then((animes) => {
      res.render("animes/index", {
        animes,
        title: "All animes",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function newAnime(req, res) {
  res.render("animes/new", {
    title: "New Anime",
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.cool = !!req.body.cool
  Anime.create(req.body)
    .then((anime) => {
      res.redirect("/animes")
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/animes")
    })
}

function show(req, res) {
  Anime.findById(req.params.id)
    .populate("owner")
    .then((anime) => {
      res.render("animes/show", {
        anime,
        title: "Anime Show",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/animes")
    })
}

export { index, newAnime as new, create, show }
