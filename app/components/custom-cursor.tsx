"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const clickableSelector =
  'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]';

export function CustomCursor() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);

  const x = useSpring(0, { stiffness: 500, damping: 35, mass: 0.2 });
  const y = useSpring(0, { stiffness: 500, damping: 35, mass: 0.2 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const handleMediaChange = () => setIsCoarse(media.matches);

    handleMediaChange();
    media.addEventListener("change", handleMediaChange);

    const onMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setIsVisible(true);
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsActive(Boolean(target?.closest(clickableSelector)));
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      media.removeEventListener("change", handleMediaChange);
    };
  }, [x, y]);

  if (isCoarse) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-100 mix-blend-multiply"
      style={{ x, y }}
      animate={{
        scale: isActive ? 1.8 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-linear-to-br from-[#a8d8ff] via-[#ffc6dd] to-[#c8f5c9] shadow-[0_0_40px_rgba(255,174,198,0.6)]" />
    </motion.div>
  );
}
