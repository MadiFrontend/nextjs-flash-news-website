import { NAV_ITEMS } from "./constant";
import Image from "next/image";
import logoPng from "@/public/logo.png";
import { NavItem } from "./NavItem";

export function Nav({}) {
  return (
    <div>
      {/* logo */}
      <Image src={logoPng} alt="logo" className="w-40" />
      {/* Nav Items */}
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          <NavItem {...navItem} />
        ))}
      </nav>
    </div>
  );
}
