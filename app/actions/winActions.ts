"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { winController } from "@/controllers/winController";

export async function createWinAction(formData: FormData) {
  await winController.create(formData);

  revalidatePath("/wins");
  redirect("/wins");
}

export async function deleteWinAction(id: string) {
  await winController.destroy(id);

  revalidatePath("/wins");
  redirect("/wins");
}