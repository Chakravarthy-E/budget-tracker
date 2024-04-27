import { PiggyBank } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}
export function MobileLogo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export default Logo;
