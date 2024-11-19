"use client";

import { NavLink } from "@mantine/core";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const data = [
    { label: "Home", value: "home", href: "/home" },
    { label: "Boards", value: "boards", href: "/boards" },
    { label: "Matches", value: "matches", href: "/matches" },
    { label: "Dashboard", value: "dashboard", href: "/dashboard" },
  ];

  const path = usePathname() || "";

  return (
    <>
      {data.map((data) => (
        <NavLink
          key={data.value}
          label={data.label}
          href={data.href}
          active={path.includes(data.href) ?? false}
        />
      ))}
    </>
  );
};
