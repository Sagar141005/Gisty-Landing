import React from "react";
import { Download, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
          Skip the overwhelm. <br />
          <span className="text-neutral-400 dark:text-neutral-600">
            See what actually matters.
          </span>
        </h1>

        <p className="md:text-lg text-sm text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Gisty distills messy webpages into simple, readable bullet points—so
          you spend less time scrolling and more time understanding.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="/gisty-v1.zip"
            download
            className="group px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-medium flex items-center gap-2 hover:bg-black dark:hover:bg-neutral-200 transition-all active:scale-95"
          >
            <Download size={18} />
            <span>Download Beta</span>
          </a>

          <a
            href="https://github.com/Sagar141005/Gisty"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-medium flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
          >
            <Github size={18} />
            <span>Star on GitHub</span>
          </a>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-2 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50">
            <div className="relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-video flex items-center justify-center">
              <video
                id="demo"
                src="https://www.pexels.com/download/video/29726612/"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
