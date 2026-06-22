"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import  prisma from "@/lib/prisma";
import { signIn } from "@/lib/auth";

export async function signupAction(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "").toLowerCase();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("A user with this email already exists.");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/wins",
  });
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").toLowerCase();
  const password = String(formData.get("password") || "");

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/wins",
  });
}