import React from "react";
import { Cover } from "@/app/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-7xl md:text-6xl lg:text-8xl xl:text-8xl font-semibold max-w-7xl mx-auto text-center mt-36 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-700 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-blue-400 dark:to-blue-500">
        Manage DMs <br /> like <Cover >never before.</Cover>
      </h1>
      <div className="flex flex-col justify-center items-center space-y-4">
  <p className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700 text-center">
    Less clutter. More control.
  </p>
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
  <button className="w-44 md:w-auto h-12 px-6 rounded-lg bg-blue-500 text-white text-xl font-semibold flex justify-center items-center" style={{ lineHeight: '2.2rem' }}>
    <span>Get early access</span>
  </button>
  <button className="w-44 md:w-auto h-12 px-6 rounded-lg bg-white border border-orange-400 text-orange-500 text-xl font-semibold flex justify-center items-center" style={{ lineHeight: '2.2rem' }}>
    <span>Sign in</span>
  </button>
</div>


</div>

     
    </div>
  );
}
