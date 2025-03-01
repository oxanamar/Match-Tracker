import axios from "axios";
import { MatchesResponse } from "../../entities/match/types";

const BASE_URL = "https://app.ftoyd.com/fronttemp-service";

export const fetchMatches = async (): Promise<MatchesResponse> => {
  try {
    const response = await axios.get<MatchesResponse>(`${BASE_URL}/fronttemp`);
    return response.data;
  } catch (error) {
    throw new Error("Ошибка: не удалось загрузить информацию");
  }
};
