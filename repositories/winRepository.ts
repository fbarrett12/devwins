import prisma from "@/lib/prisma";
import { Category } from "@prisma/client";

export type CreateWinInput = {
  title: string;
  category: Category;
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  impactMetric?: string;
  technologies?: string[];
};

export type UpdateWinInput = Partial<CreateWinInput>;

export const winRepository = {
  findAll() {
    return prisma.win.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  findById(id: string) {
    return prisma.win.findUnique({
      where: { id },
    });
  },

  create(data: CreateWinInput) {
    return prisma.win.create({
      data,
    });
  },

  update(id: string, data: UpdateWinInput) {
    return prisma.win.update({
      where: { id },
      data,
    });
  },

  delete(id: string) {
    return prisma.win.delete({
      where: { id },
    });
  },
};