import React, { useState } from "react";
import {
  Copy,
  Check,
  Download,
  FolderOpen,
  ToggleRight,
  Box,
} from "lucide-react";

export default function InstallGuide() {
  return (
    <section
      id="how-to"
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Install Gisty in Minutes
          </h2>

          <p className="text-md text-neutral-600 dark:text-neutral-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Gisty is currently in Beta. Install it manually in just five quick
            steps — no tracking, and no data collection.
          </p>
        </div>

        <div className="space-y-4">
          <StepCard
            num="01"
            icon={<Download size={20} />}
            title="Download the Extension"
            desc="Grab the latest packaged version of Gisty."
          >
            <a
              href="/gisty-v1.zip"
              download
              className="inline-flex items-center gap-2 px-4 py-2 mt-3 bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-bold rounded hover:opacity-90 transition-opacity"
            >
              <Download size={14} /> Download .zip
            </a>
          </StepCard>

          <StepCard
            num="02"
            icon={<FolderOpen size={20} />}
            title="Unzip the Folder"
            desc="Extract the contents anywhere you like. Make sure the folder contains a manifest.json file."
          />

          <StepCard
            num="03"
            icon={<Box size={20} />}
            title="Open Extensions Manager"
            desc="Copy the address below and paste it into your browser bar."
          >
            <CopyBox text="chrome://extensions" />
          </StepCard>

          <StepCard
            num="04"
            icon={<ToggleRight size={20} />}
            title="Enable Developer Mode"
            desc="Toggle the switch located in the top-right corner of the Extensions page."
          />

          <StepCard
            num="05"
            icon={<Box size={20} />}
            title="Load the Unpacked Folder"
            desc="Click the “Load unpacked” button and select your unzipped Gisty folder."
          />
        </div>

        <div className="mt-12 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-xs text-neutral-500">
            <span className="font-semibold text-neutral-900 dark:text-white">
              Why manual install?
            </span>{" "}
            It lets us ship updates instantly and keep Gisty completely free —
            no store delays, no tracking, and fully open source on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}

function StepCard({ num, icon, title, desc, children }) {
  return (
    <div className="group flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/20 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 min-w-[60px]">
        <span className="font-mono text-xs text-neutral-400">STEP</span>
        <span className="font-mono text-xl font-bold text-green-600 dark:text-green-500">
          {num}
        </span>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-1.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
            {icon}
          </div>
          <h3 className="font-bold text-neutral-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-lg">
          {desc}
        </p>
        {children && <div className="mt-1">{children}</div>}
      </div>
    </div>
  );
}

function CopyBox({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-3 flex items-center gap-2 max-w-xs">
      <code className="flex-1 px-3 py-2 rounded bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 select-all">
        {text}
      </code>
      <button
        onClick={handleCopy}
        className="p-2 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={14} className="text-green-500" />
        ) : (
          <Copy size={14} className="text-neutral-500" />
        )}
      </button>
    </div>
  );
}
