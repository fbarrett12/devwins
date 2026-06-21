import { winRepository } from "@/repositories/winRepository";
import type { WinInput } from "@/validators/winSchema";

export const winService = {
  async getAllWins(userId: string) {
    return winRepository.findAllByUserId(userId);
  },

  async getWinById(id: string, userId: string) {
    return winRepository.findByIdAndUserId(id, userId);
  },

  async createWin(data: WinInput, userId: string) {
    return winRepository.create(data, userId);
  },

  async updateWin(id: string, data: WinInput, userId: string) {
    return winRepository.update(id, data, userId);
  },

  async deleteWin(id: string, userId: string) {
    return winRepository.delete(id, userId);
  },
};