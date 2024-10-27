"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center p-10">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services" />
        <MenuItem setActive={setActive} active={active} item="Products" />
      </Menu>
    </div>
  );
}
