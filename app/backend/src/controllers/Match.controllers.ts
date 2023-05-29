import { Request, Response } from 'express';
import MatchService from '../services/Match.services';

export default class MartchController {
  public static async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const allMatches = await MatchService.getAllMatch(inProgress);
    res.status(200).json(allMatches);
  }

  public static async finishMatch(req:Request, res:Response) {
    const { id } = req.params;
    await MatchService.finishMatch(Number(id));
    res.status(200).json({ message: 'Finished' });
  }
}
