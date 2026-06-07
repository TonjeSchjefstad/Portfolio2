import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

type NavItem = {
  label: string;
  href: string;
  isRoute: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About me", href: "#about", isRoute: false },
  { label: "Projects", href: "#projects", isRoute: false },
  { label: "Contact Me", href: "#contact", isRoute: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isProjectDetail = pathname.startsWith("/projects/");

  return (
    <nav className="w-full bg-surface border-b border-border px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <NavLink to="/" className="flex items-center gap-2 text-text-primary text-md md:text-lg">
          <img src={logo} alt="Tonje Schjefstad logo" className="h-8 w-auto" />
          <span style={{ fontFamily: "var(--font-logo)" }}>Tonje Schjefstad</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          {isProjectDetail ? (
            <li>
              <NavLink
                to="/"
                className="hover:text-text-primary transition-colors duration-200"
              >
                Home
              </NavLink>
            </li>
          ) : (
            navItems.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-accent font-medium border-b-2 border-accent pb-1"
                        : "hover:text-text-primary transition-colors duration-200"
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a href={item.href} className="hover:text-text-primary transition-colors duration-200">
                    {item.label}
                  </a>
                )}
              </li>
            ))
          )}
          <li>
            <a
              href="https://github.com/TonjeSchjefstad"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my GitHub profile"
              className="hover:text-text-primary transition-colors duration-200"
            >
              <i className="devicon-github-original text-2xl text-text-muted hover:text-text-primary transition-colors duration-200" />
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pt-4 pb-6 text-sm items-end text-text-muted border-t border-border mt-4">
          {isProjectDetail ? (
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-text-primary transition-colors duration-200"
              >
                Home
              </NavLink>
            </li>
          ) : (
            navItems.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <NavLink
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-accent font-medium"
                        : "hover:text-text-primary transition-colors duration-200"
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))
          )}
          <li>
            <a
              href="https://github.com/TonjeSchjefstad"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="hover:text-text-primary transition-colors duration-200"
            >
              GitHub
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}