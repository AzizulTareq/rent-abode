import React from "react";
import Image from "next/image";
import Search from "./Search";
import TextTypeAnimation from "../TextTypeAnimation";

const Banner = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="">
        <div className="relative">
          <Image
            className="h-[800px] brightness-50"
            src="/images/hotel10.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%" }}
            alt="Banner Image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl p-6">
            <div className="text-4xl font-bold text-white">
              <h2 className="text-center py-4 border-2 my-2 bg-gray-800 bg-opacity-50 px-4">
                <TextTypeAnimation
                  text="Find The Luxury"
                  delay={150}
                />
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
