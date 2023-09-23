"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Metronome } from "@uiball/loaders";
import { Metadata } from "next";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!loading) {
    return <></>;
  }

  return (
    <div
      role="status"
      className="flex sticky flex-col h-screen z-50 right-0 left-0 top-0 bg-white bottom-0 items-center justify-center overflow-hidden gap-10"
    >
      <p className="font-semibold text-5xl font-mono">
        Welcome to Campus <span className="text-[#F27851]">Book</span> Swap
      </p>
      <Metronome size={100} color="#F27851" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default PageLoader;
