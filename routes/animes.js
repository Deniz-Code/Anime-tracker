import { Router } from "express"
import * as animesCtrl from "../controllers/animes.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get("/", animesCtrl.index)
router.get("/new", isLoggedIn, animesCtrl.new)
router.get("/:id", animesCtrl.show)
router.get("/:id/edit", isLoggedIn, animesCtrl.edit)

router.post("/", animesCtrl.create)
router.put("/:id", isLoggedIn, animesCtrl.update)

export { router }
