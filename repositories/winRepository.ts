import prisma from "@/lib/prisma";
import type { WinInput } from "@/validators/winSchema";

export const winRepository = {
  async findAllByUserId(userId: string) {
    return prisma.win.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async findByIdAndUserId(id: string, userId: string) {
    return prisma.win.findFirst({
      where: {
        id,
        userId,
      },
    });
  },

  async create(data: WinInput, userId: string) {
    return prisma.win.create({
      data: {
        ...data,
        userId,
      },
    });
  },

  async update(id: string, data: WinInput, userId: string) {
    const existingWin = await prisma.win.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingWin) {
      throw new Error("Win not found.");
    }

    return prisma.win.update({
      where: { id },
      data,
    });
  },

  async delete(id: string, userId: string) {
    const existingWin = await prisma.win.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingWin) {
      throw new Error("Win not found.");
    }

    return prisma.win.delete({
      where: { id },
    });
  },
};