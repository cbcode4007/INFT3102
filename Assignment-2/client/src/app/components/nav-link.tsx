"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <li className="nav-item">
      <Link
        href={href}
        className={cn(
          "nav-link",
          isActive ? "opacity-100" : "opacity-50 hover:opacity-100"          
        )}
      >
        {children}
      </Link>
    </li>
  );
}