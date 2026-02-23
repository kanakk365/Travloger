import React from "react";
import NewNavbar from "./NewNavbar";
import NewHero from "./NewHero";

export default function HeroWithNavbar() {
  return (
    <div className="flex flex-col font-manrope">
      <NewNavbar />
      <NewHero />
    </div>
  );
}

