"use client";
import { motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const NavLink = ({
  href,
  classNameLink,
  classNameContainer,
  icon,
  iconHover,
  children,
}: {
  href: Url;
  classNameLink?: string;
  classNameContainer?: string;
  icon?: JSX.Element;
  iconHover?: JSX.Element;
  children?: JSX.Element | JSX.Element[] | string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={twMerge(
        "ml-4 flex items-center gap-1 text-2xl font-semibold hover:text-white",
        classNameLink,
      )}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.5 }}
        className={twMerge("mb-1", classNameContainer)}
      >
        {isHovered ? iconHover : icon}
      </motion.div>
      {children}
    </Link>
  );
};

export default NavLink;
