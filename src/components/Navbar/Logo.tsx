"use client";

import gsap from "gsap";
import { useRef } from "react";

const Logo = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);

  const onLogoEnter = () => {
    const logoDiv = logoRef.current;
    const currentColor = logoRef.current?.getAttribute("data-color");
    const nextColor: string =
      currentColor === "#0ea5e9"
        ? "#8b5cf6"
        : currentColor === "#8b5cf6"
        ? "#ec4899"
        : "#0ea5e9";
    logoRef.current?.setAttribute("data-color", nextColor);

    gsap.to(logoDiv, { color: nextColor, duration: "0.2", ease: "power1.out" });
  };

  const onLogoLeave = () => {
    const logoDiv = logoRef.current;
    gsap.to(logoDiv, { color: "#000", duration: "0.2", ease: "power1.out" });
  };

  return (
    <div className="group">
      <div
        className="nav-logo font-agbalumo pointer-events-auto scale-100 cursor-pointer transition duration-200 ease-in group-hover:scale-105"
        data-color="#0ea5e9"
        ref={logoRef}
        onMouseEnter={onLogoEnter}
        onMouseLeave={onLogoLeave}
      >
        R
      </div>
    </div>
  );
};

export default Logo;
