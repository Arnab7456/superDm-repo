"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        className={` text-xl cursor-pointer hover:text-blue-500 ${
          active === item ? "text-blue-500" : "dark:text-black"
        }`}
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-blue-300 dark:border-white/[0.2] flex justify-center space-x-10 px-8 py-6"
    >
      <div className="flex items-center space-x-4 gap-14" >
        <Link href="/" className="flex items-center">
         
          <Image
            src="/super.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-lg mr-2" // Reduced margin to mr-2 for closer spacing
          />
          <span className="text-2xl font-bold  text-blue-500 mr-12">
            Superdm
          </span>
        </Link>
        <div className="flex items-center gap-8">
        <MenuItem setActive={setActive} active={active} item="Terms" />
        <MenuItem setActive={setActive} active={active} item="Privacy" />
        </div>
      </div>
    </nav>
  );
};
