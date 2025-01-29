// app/components/Navbar.js (Server Component)
import Link from "next/link";

const links = [
  {href: "/client", label: "Client"},
  {href: "/drinks", label: "Drinks"},
  {href: "/tasks", label: "Tasks"},
  {href: "/prisma-example", label: "Prisma"},
];

const Navbar = () => {
  return (
    <nav className="bg-base-200 shadow-lg">
      <div className="navbar container mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            NextJS
          </Link>
        </div>

        {/* Links for Desktop */}
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="btn btn-ghost">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;