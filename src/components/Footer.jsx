import React from "react";
import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <span className="font-bold text-lg text-neutral-900 dark:text-white tracking-tight">
            Gisty
          </span>

          <span className="hidden md:block w-px h-4 bg-neutral-300 dark:bg-neutral-700"></span>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-light text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Systems Normal
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <FooterLink href="https://github.com/Sagar141005/Gisty">
            <Github size={14} /> Github
          </FooterLink>

          <FooterLink href="#demo">Demo</FooterLink>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto px-6 pb-6 text-xs text-neutral-400 dark:text-neutral-600">
        <p className=" text-neutral-400 dark:text-neutral-600 font-mono">
          © {new Date().getFullYear()} Gisty. Open Source Software.
        </p>

        <div className="flex items-center gap-1.5">
          <span>Made with</span>
          <div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Heart
              size={14}
              className="fill-rose-500 text-rose-500 transition-all"
            />
          </div>
          <span>by</span>
          <a
            href="https://sagarsaini.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:underline transition-colors"
          >
            Sagar
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
