"use client";

import React, { type MouseEvent, useRef, type HTMLAttributes } from "react";
import Link, { type LinkProps } from "next/link";

import { useMotionAnimate as MotionAnimate } from "@glitchtech-dev/react-motion";

type NavLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;
interface Props extends NavLinkProps {
  name?: string;
}

const LinkButton = (props: Props) => {
  const ButtonRef = useRef<HTMLAnchorElement>(null);

  const ButtonAnimation = (e: MouseEvent) => {
    if (ButtonRef.current == null) return;
    const animationType = e.type;

    if (animationType === "mouseenter") {
      MotionAnimate(
        ButtonRef.current,
        {
          scaleX: 1.05,
          scaleY: 1.05,
        },
        { duration: 0.15, easing: "ease-in" },
      );
    } else if (animationType === "mouseleave") {
      MotionAnimate(
        ButtonRef.current,
        {
          scaleX: 1,
          scaleY: 1,
        },
        { duration: 0.3, easing: "ease-out" },
      );
    } else {
      MotionAnimate(ButtonRef.current, {
        scaleX: 1.05,
        scaleY: 1.05,
      });
    }

    return;
  };

  return (
    <>
      <Link
        ref={ButtonRef}
        onMouseEnter={ButtonAnimation}
        onMouseLeave={ButtonAnimation}
        {...props}
      >
        {props.name ? props.name : props.children}
      </Link>
    </>
  );
};

export default LinkButton;
