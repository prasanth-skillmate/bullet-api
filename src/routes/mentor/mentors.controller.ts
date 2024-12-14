import { Request, Response } from "express";
import { getMentors } from "../../model/Mentor";

export async function getAll(req: Request, res: Response) {
  try {
    const mentors = await getMentors();

    res.send(mentors);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
    return;
  }
}
