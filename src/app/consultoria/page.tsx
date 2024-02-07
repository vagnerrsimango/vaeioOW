"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import GuideC from "@/components/consultoria/GuideC";
import HeroC from "@/components/consultoria/HeroC";
import ScrollTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeroC />
      <GuideC />
      <ScrollTop />
    </>
  );
}
