import { winService } from "@/services/winService";
import { winSchema } from "@/validators/winSchema";

export const winController = {
  async index() {
    return winService.getAllWins();
  },

  async show(id: string) {
    return winService.getWinById(id);
  },

  async create(formData: FormData) {
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

    return winService.createWin(validatedData);
  },

  async update(id: string, formData: FormData) {
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

    return winService.updateWin(id, validatedData);
  },

  async destroy(id: string) {
    return winService.deleteWin(id);
  },
};