"use client";

import { usePathname, useSearchParams } from "next/navigation";

import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { AiFillBank } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiHills } from "react-icons/gi";
import { BiHomeHeart } from "react-icons/bi";

const categories = [
  {
    label: "Pools",
    description: "This is property has a beautiful pool!",
    icon: AiFillBank,
  },
  {
    label: "Islands",
    description: "This property is on an island!",
    icon: AiFillBank,
  },
  {
    label: "Lake",
    description: "This property is near a lake!",
    icon: FaUmbrellaBeach,
  },
  {
    label: "Skiing",
    description: "This property has skiing activies!",
    icon: FaUmbrellaBeach,
  },
  {
    label: "Modern",
    description: "This property has skiing activies!",
    icon: GiHills,
  },
  {
    label: "Hotel",
    description: "This property has skiing activies!",
    icon: BiHomeHeart,
  },
  {
    label: "Resort",
    description: "This property has skiing activies!",
    icon: FaUmbrellaBeach,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container wide={true}>
      <div
        className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
      "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
