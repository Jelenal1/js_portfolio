"use client";
import Link from "next/link";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import { PiDevToLogoFill } from "react-icons/pi";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex h-20 w-full items-center border-b-2 px-2">
      <Link href="/" className="flex items-center gap-2 text-4xl font-bold">
        JS
        <PiDevToLogoFill size={50} />
      </Link>
      <NavLink
        href="/projects"
        icon={<FaRegFolder size={30} />}
        iconHover={<FaRegFolderOpen size={35} />}
        classNameContainer="w-8"
      >
        Projects
      </NavLink>
    </div>
  );
};

export default Navbar;
