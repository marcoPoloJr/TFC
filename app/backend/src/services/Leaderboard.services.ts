import TeamModel from '../database/models/Team.model';
import Generate from '../utils/Generate.leaderboard';
import MatchModel from '../database/models/Match.model';
import { TeamInfo } from '../interfaces';

export default class LeaderboardService {
  public static async getHomeLeaderboard():Promise<TeamInfo[]> {
    const matches = await MatchModel.findAll({ where: { inProgress: false } });
    const teams = await TeamModel.findAll();
    return Generate.generateLeaderboard(matches, teams);
  }
}