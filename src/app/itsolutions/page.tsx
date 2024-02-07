"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import GuideIS from "@/components/itsolutions/GuideIS";
import HeroIS from "@/components/itsolutions/HeroIS";
import ScrollTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeroIS />
      <GuideIS />
      <ScrollTop />
    </>
  );
}
