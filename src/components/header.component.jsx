import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-screen flex justify-end pr-2 py-2 text-[#3384c3] border-b-[0.5px] border-[#3384c3]">
      <Button
        variant="link"
        className="p-2 bg-gray-50 rounded-lg text-[#3384c3]"
      >
        <HiMenuAlt3 size={28} />
      </Button>
    </div>
  );
};

export default Header;
