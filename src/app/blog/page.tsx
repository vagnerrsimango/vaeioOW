"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroBlog from "@/components/blog/HeroBlog";
import FooterBlog from "@/components/blog/FooterBlog";
import GuideBlog from "@/components/blog/GuideBlog";
import ScrollTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeroBlog />
      <GuideBlog />
      <ScrollTop />
    </>
  );
}
