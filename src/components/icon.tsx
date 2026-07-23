"use client";

import type React from "react";
import {
  Target,
  Zap,
  Lock,
  Monitor,
  Trophy,
  Globe,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// ponytail: custom SVG for Docker whale, Lucide has no Docker icon
function DockerIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 24 19"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22.8 6.24c-.4-.28-.92-.38-1.44-.38-.36 0-.72.08-1.08.2a4.6 4.6 0 00-1.4-1.52l-.48-.32-.32.48c-.2.32-.28.72-.28 1.08 0 .4.08.72.24 1 .16.28.4.48.72.64a2.3 2.3 0 001.04.24c.28 0 .52-.04.76-.08.08.68-.12 1.32-.56 1.8-.36.4-.84.64-1.44.76H.72c0 .04-.04.08-.04.12-.44 1.68-.08 3.04 1 4 .64.68 1.56 1.04 2.8 1.12 1.44.04 2.76-.24 3.96-.8 0-.76.12-1.48.36-2.2h4.48c.84 2.72 2.64 4.48 5.04 4.48h.04c3.56-.2 6.08-2.64 6.56-6.4.64-.16 1.16-.52 1.52-1.04.4-.56.56-1.2.48-1.88l-.04-.2-.2.04zM5.88 11.12H3.24v-.84h2.64v.84zm0-1.84H3.24v-.84h2.64v.84zm0-1.84H3.24v-.84h2.64v.84zm2.64 3.68H5.88v-.84h2.64v.84zm0-1.84H5.88v-.84h2.64v.84zm0-1.84H5.88v-.84h2.64v.84zm2.64 3.68H8.52v-.84h2.64v.84zm0-1.84H8.52v-.84h2.64v.84zm0-1.84H8.52v-.84h2.64v.84z"
        fill="#0891B2"
      />
    </svg>
  );
}

const iconMap: Record<string, LucideIcon | (() => React.JSX.Element)> = {
  target: Target,
  zap: Zap,
  lock: Lock,
  monitor: Monitor,
  trophy: Trophy,
  globe: Globe,
  docker: () => <DockerIcon />,
  refresh: RefreshCw,
  wrench: Wrench,
};

export function Icon({ name, size = 28 }: { name: string; size?: number }) {
  const El = iconMap[name];
  if (!El) return null;
  if (typeof El === "function" && !("displayName" in El)) return <El />;
  const LucideEl = El as LucideIcon;
  return <LucideEl size={size} className="text-accent" aria-hidden="true" />;
}