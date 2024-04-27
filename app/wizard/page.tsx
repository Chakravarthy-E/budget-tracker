import Logo from "@/components/atoms/Logo";
import { Button } from "@/components/ui/button";
import { CurrencyComboBox } from "@/components/atoms/CurrencyComboBox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-2">
      <div className="space-y-3">
        <h1 className="text-center text-3xl">
          Welcome, <span className="font-bold">{user.firstName}👋</span>
        </h1>
        <h2 className="mt-1 text-center text-base text-muted-foreground">
          Let &apos;s got started by setting up your currency
        </h2>
        <h3 className="text-center text-sm text-muted-foreground">
          You can change those settings at any time
        </h3>
      </div>
      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>
            Set your default currency for transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/"}>I&apos;m done! Take me to the dashboard</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
}

export default page;
