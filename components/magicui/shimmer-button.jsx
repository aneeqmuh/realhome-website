"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../app/lib/utils";

export const ShimmerButton = React.forwardRef(({
  shimmerColor = "red",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}, ref) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // ⛔ No mismatch — nothing rendered on server
  }

  return (
    <button
      style={{
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background,
      }}
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
      ref={ref}
      {...props}
    >
      {/* Spark container */}
      <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      {/* Highlight */}
      <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />

      {/* Backdrop */}
      <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />

      {children}
    </button>
  );
});

ShimmerButton.displayName = "ShimmerButton";
