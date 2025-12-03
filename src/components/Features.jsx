import React from "react";
import {
  Zap,
  MousePointer2,
  Lock,
  Copy,
  SlidersHorizontal,
  Monitor,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={24} />,
    title: "Instant Analysis",
    desc: "Powered by Gemini 2.5 Flash, delivering detailed analysis of long content in seconds.",
  },
  {
    icon: <MousePointer2 size={24} />,
    title: "Context Menu",
    desc: "Right-click any selection to summarize specific paragraphs without leaving your flow.",
  },
  {
    icon: <Monitor size={24} />,
    title: "System Theme Support",
    desc: "Gisty follows your system theme automatically, with light or dark mode.",
  },
  {
    icon: <Lock size={24} />,
    title: "Privacy First",
    desc: "We never store snippets, summaries, or browsing data—and we never request your API key.",
  },
  {
    icon: <SlidersHorizontal size={24} />,
    title: "Adaptive Styles",
    desc: "Switch between Professional, ELI5, or Sarcastic modes depending on your mood.",
  },
  {
    icon: <Copy size={24} />,
    title: "One-Click Export",
    desc: "Copy formatted bullet points directly to your clipboard for Notion, Slack, or Docs.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-8 px-6 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Built for speed. <br />
            <span className="text-neutral-400 dark:text-neutral-600">
              Designed for focus.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-b border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 dark:divide-neutral-800 divide-neutral-200">
          {features.map((f, i) => (
            <div
              key={i}
              className={`
                group p-8 md:p-10 transition-colors hover:bg-white dark:hover:bg-neutral-900
                /* Middle column vertical borders (desktop) */
                ${
                  i === 1 || i === 4
                    ? "lg:border-l lg:border-r border-neutral-200 dark:border-neutral-800"
                    : ""
                }
                /* Left borders for 1, 3, 5 starting at md */
                ${
                  i === 1 || i === 3 || i === 5
                    ? "md:border-l border-neutral-200 dark:border-neutral-800"
                    : ""
                }
                /* Top border starting at md for items >= 2 */
                ${
                  i >= 2
                    ? "md:border-t border-neutral-200 dark:border-neutral-800"
                    : ""
                }
                /* Top border starting at lg for items >= 3 */
                ${
                  i >= 3
                    ? "lg:border-t border-neutral-200 dark:border-neutral-800"
                    : ""
                }
              `}
            >
              <div className="mb-6 text-neutral-400 group-hover:text-green-500 transition-colors duration-300">
                {f.icon}
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                {f.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
