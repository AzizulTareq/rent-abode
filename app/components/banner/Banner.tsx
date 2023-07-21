"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Search from "./Search";
import TextTypeAnimation from "../TextTypeAnimation";

const Banner = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
  const imageUrls = [
    "/images/hotel12.jpg",
    "/images/hotel10.jpg",
    "/images/hotel2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [currentImageIndex, imageUrls.length]);

  return (
    <div className="bg-gray-100">
      <div className="">
        <div className="relative">
          <Image
            className="xl:h-[700px] h-[500px] sm:brightness-50 brightness-0"
            src={imageUrls[currentImageIndex]}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%" }}
            alt="Banner Image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl p-6">
            <div className="text-4xl font-bold text-white">
              <h2 className="text-center py-4 border-2 my-2 bg-gray-800 bg-opacity-50 px-4">
                <TextTypeAnimation text="Your Next Space" delay={150} />
              </h2>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
