import { Router } from "express";
import {generateStep} from "../controller/appController.js"

const router = Router()


router.post('/', generateStep)


export default router