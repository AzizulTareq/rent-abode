"use client";

import Container from "../Container";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import { BsBank2 } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <div className="fixed z-50 w-full bg-transparent shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <p
              onClick={() => router.push("/")}
              className="text-2xl flex font-bold text-amber-400 drop-shadow-lg px-4 sm:px-4 md:px-8 cursor-pointer whitespace-nowrap"
            >
              Rent
              <span className="px-2">
                <BsBank2 size={25} />
              </span>
              Abode
            </p>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
