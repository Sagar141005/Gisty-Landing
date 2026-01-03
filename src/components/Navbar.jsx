import React, { useState } from "react";
import { Menu, X, Shredder, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const ThemeIcon = () => {
    return resolvedTheme === "dark" ? <Moon size={18} /> : <Sun size={18} />;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <nav
        className="
        w-full max-w-5xl 
        bg-white/70 dark:bg-neutral-900/70 
        backdrop-blur-md 
        border border-neutral-200 dark:border-neutral-800 
        rounded-2xl 
        shadow-sm dark:shadow-black/20
        transition-all duration-300
      "
      >
        <div className="px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <Shredder
                size={16}
                className="text-neutral-900 dark:text-white fill-current"
              />
            </div>
            <span className="font-semibold text-neutral-900 dark:text-white tracking-tight">
              Gisty
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-to">Install</NavLink>
            <NavLink href="https://github.com/Sagar141005/Gisty">
              Source
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
              title={`Theme: ${resolvedTheme}`}
            >
              <ThemeIcon />
            </button>

            <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-700"></div>

            <a
              href="/gisty-v1.zip"
              download
              className="
                px-4 py-1.5 text-sm font-medium rounded-lg 
                bg-neutral-900 text-white hover:bg-black 
                dark:bg-white dark:text-black dark:hover:bg-neutral-200
                transition-all active:scale-95
              "
            >
              Download Beta
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-neutral-500 dark:text-neutral-400"
            >
              <ThemeIcon />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-neutral-900 dark:text-white"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="px-5 pb-6 pt-2 md:hidden border-t border-neutral-200 dark:border-neutral-800 mt-2 space-y-2">
            <MobileLink href="#features">Features</MobileLink>
            <MobileLink href="#how-to">Install Guide</MobileLink>
            <MobileLink href="https://github.com/Sagar141005/Gisty">
              GitHub
            </MobileLink>
            <div className="pt-2">
              <a
                href="/gisty-v1.zip"
                className="block w-full text-center py-2.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black font-medium"
              >
                Download Beta
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

function MobileLink({ href, children }) {
  return (
    <a
      href={href}
      className="block py-2 text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
    >
      {children}
    </a>
  );
}
