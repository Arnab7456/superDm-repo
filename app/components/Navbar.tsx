"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { Menu } from "./ui/navbar-menu";

// NavbarDemo component
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center p-10">
      <Navbar />
    </div>
  );
}

// Navbar component
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services" />
        <MenuItem setActive={setActive} active={active} item="Products" />
        <MenuItem setActive={setActive} active={active} item="Pricing" />
      </Menu>
    </div>
  );
}

// MenuItem component
export const MenuItem = ({
  setActive,
  active,
  item,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`text-xl cursor-pointer hover:text-blue-500 ${
          active === item ? "text-blue-500" : "dark:text-black"
        }`}
      >
        {item}
      </motion.p>
    </div>
  );
}