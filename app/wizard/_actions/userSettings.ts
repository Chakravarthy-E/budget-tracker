"use server";
import prisma from "@/lib/prisma";
import { userSettingsCurrencySchema } from "@/schema/userSettings";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export async function UpdateUserCurrency(currency: string) {
  const parseBody = userSettingsCurrencySchema.safeParse({
    currency,
  });

  if (!parseBody.success) {
    throw parseBody.error;
  }

  const user = await currentUser();
  if (!user) {
    redirect("/sing-in");
  }

  const userSettings = await prisma.userSettings.update({
    where: {
      userId: user.id,
    },
    data: {
      currency,
    },
  });
  return userSettings;
}
