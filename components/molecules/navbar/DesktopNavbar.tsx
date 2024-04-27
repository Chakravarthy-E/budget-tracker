import Logo from "@/components/atoms/Logo";
import React from "react";
import { navItems } from "@/utils/navitems";
import NavbarItem from "./NavbarItem";
import { UserButton } from "@clerk/nextjs";
import ThemeSwitcherBtn from "@/components/atoms/ThemeSwitcherBtn";

function DesktopNavbar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {navItems.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

export default DesktopNavbar;
