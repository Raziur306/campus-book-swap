"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PageLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState == "complete") {
      setIsLoaded(true);
    }
  }, []);

  if (isLoaded) {
    return <></>;
  }

  return (
    <>
      <div
        role="status"
        className="flex absolute backdrop-blur-sm w-full h-screen justify-center items-center z-50"
      >
        <Image
          priority={true}
          width={500}
          height={500}
          alt="Loading Animation"
          src={"./svg/loading.svg"}
        />
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default PageLoader;
