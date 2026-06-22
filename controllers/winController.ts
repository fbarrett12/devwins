import { winService } from "@/services/winService";
import { winSchema } from "@/validators/winSchema";

export const winController = {
  async index(userId: string) {
    return winService.getAllWins(userId);
  },

  async show(id: string, userId: string) {
    return winService.getWinById(id, userId);
  },

  async create(formData: FormData, userId: string) {
    const rawData = {
      title: formData.get("title"),
      category: formData.get("category"),
      situation: formData.get("situation") || undefined,
      task: formData.get("task") || undefined,
      action: formData.get("action") || undefined,
      result: formData.get("result") || undefined,
      impactMetric: formData.get("impactMetric") || undefined,
      technologies:
        formData
          .get("technologies")
          ?.toString()
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean) ?? [],
    };

    const validatedData = winSchema.parse(rawData);

    return winService.createWin(validatedData, userId);
  },

  async update(id: string, formData: FormData, userId: string) {
    const rawData = {
      title: formData.get("title"),
      category: formData.get("category"),
      situation: formData.get("situation") || undefined,
      task: formData.get("task") || undefined,
      action: formData.get("action") || undefined,
      result: formData.get("result") || undefined,
      impactMetric: formData.get("impactMetric") || undefined,
      technologies:
        formData
          .get("technologies")
          ?.toString()
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean) ?? [],
    };

    const validatedData = winSchema.parse(rawData);

    return winService.updateWin(id, validatedData, userId);
  },

  async destroy(id: string, userId: string) {
    return winService.deleteWin(id, userId);
  },

  async demoIndex() {
    return winService.getDemoWins();
  },

  async demoShow(id: string) {
    return winService.getDemoWinById(id);
  },
};