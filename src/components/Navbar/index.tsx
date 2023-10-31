import React from "react";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navbar fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-out">
      <div className="navbar_container flex items-center justify-between px-5">
        <MenuButton label="Home" />
        <Logo />
        <MenuButton label="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
