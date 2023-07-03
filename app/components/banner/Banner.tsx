import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="">
        <div className="relative">
          <Image
            className="h-[800px]"
            src="/images/hotel10.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%" }}
            alt="Banner Image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 rounded-xl p-6">
            <h1 className="text-4xl font-bold text-white">
              Your Banner Heading Goes Here
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
