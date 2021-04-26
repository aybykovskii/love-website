import { Router } from "express";
import { logout } from "./logout";
import { signin } from "./signin";
import { signup } from "./signup";
import { check_session } from "./check_session";

//routes for /api/auth

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
router.post("/check_session", check_session);

module.exports = router;
