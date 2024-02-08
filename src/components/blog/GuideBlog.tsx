"use client";
import React, { useState, useEffect } from "react";
import cover from "@/lib/img/impdigital.jpg";
import hackathon from "@/lib/img/hackathon.jpg";
import ent1 from "@/lib/img/ent1.jpg";
import ent2 from "@/lib/img/ent2.jpg";
import ent3 from "@/lib/img/ent3.jpeg";
import Image from "next/image";
import "animate.css";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";
import BlogCard from "./BlogCard";
import author from "@/lib/img/miacouto.jpg";

const GuideBlog = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center"></section>
  );
};

export default GuideBlog;
