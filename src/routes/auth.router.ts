import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

/** Authentication Routes */
export const authRouter = (): Router => {
  const router = Router();

  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", authMiddleware, logout);

  return router;
};
