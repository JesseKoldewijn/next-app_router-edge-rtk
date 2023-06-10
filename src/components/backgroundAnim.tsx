"use client";

import { useMotionAnimate as MotionAnimate } from "@glitchtech-dev/react-motion";
import { type ReactNode, useMemo } from "react";
const BgAnimate = ({ children }: { children: ReactNode }) => {
  useMemo(() => {
    const BodyRef = document.body;

    MotionAnimate(
      BodyRef,
      {
        backgroundSize: ["250%", "50%"],
        backgroundPositionX: ["50%", "-50%", "0%"],
        opacity: ["0", "1"],
      },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  }, []);

  return <>{children}</>;
};

export default BgAnimate;
