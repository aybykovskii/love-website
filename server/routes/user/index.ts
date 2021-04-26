import { Router } from "express";
import { get_user } from "./get_user";

//routes for /api/user

const router = Router();

router.get("/get_user/:session_id", get_user);

module.exports = router;
