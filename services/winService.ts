import {
  CreateWinInput,
  UpdateWinInput,
  winRepository,
} from "@/repositories/winRepository";

export const winService = {
  getAllWins() {
    return winRepository.findAll();
  },

  getWinById(id: string) {
    return winRepository.findById(id);
  },

  createWin(data: CreateWinInput) {
    return winRepository.create({
      ...data,
      technologies: data.technologies ?? [],
    });
  },

  updateWin(id: string, data: UpdateWinInput) {
    return winRepository.update(id, data);
  },

  deleteWin(id: string) {
    return winRepository.delete(id);
  },
};