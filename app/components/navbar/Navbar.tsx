'use client'

import Container from "../Container";
import Search from "./Search";
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <p className="text-2xl font-bold text-yellow-500 drop-shadow-lg px-4 sm:px-4 md:px-8">
              RentABODE
            </p>
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
