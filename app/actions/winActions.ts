"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { winController } from "@/controllers/winController";

export async function createWinAction(formData: FormData) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const win = await winController.create(formData, session.user.id);

  revalidatePath("/wins");
  redirect(`/wins/${win.id}`);
}

export async function deleteWinAction(id: string) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  await winController.destroy(id, session.user.id);

  revalidatePath("/wins");
  redirect("/wins");
}