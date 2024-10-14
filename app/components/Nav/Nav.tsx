import { NAV_ITEMS } from "./constant";
import Image from "next/image";
import logoPng from "@/public/logo.png";
import { NavItem } from "./NavItem";
import Link from "next/link";

export function Nav({}) {
  return (
    <div>
      {/* logo */}
      <Link href="/">
        <Image src={logoPng} alt="logo" className="w-40" />
      </Link>
      {/* Nav Items */}
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          <NavItem {...navItem} />
        ))}
      </nav>
    </div>
  );
}
