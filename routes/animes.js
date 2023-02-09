import { Router } from "express"
import * as animesCtrl from "../controllers/animes.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get("/", animesCtrl.index)
router.get("/new",animesCtrl.new)
router.get("/:id",animesCtrl.show)

router.post("/",animesCtrl.create)


export { router }
