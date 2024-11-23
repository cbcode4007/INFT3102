import Link from "next/link";
import NavLink from "./nav-link";

const links = [
  {href: "/", label: "Home" },
  {href: "/our-team", label: "Our Team" },
];

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" href="/"><h1>CC</h1></Link>

        <ul className="flex navbar-nav ml-auto">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>      
    </header>
  );
}