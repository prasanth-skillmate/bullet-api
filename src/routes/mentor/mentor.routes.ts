import { Router } from "express";
import { getAll } from "./mentors.controller";

const mentorRouter = Router();

mentorRouter.get("/test", (req, res) => {
  res.json({
    message: "Mentor Routes API - 👋🌎🌍🌏",
  });
});

mentorRouter.get("/all", getAll);
export default mentorRouter;
