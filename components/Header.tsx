"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import UserMenuItem from "./UserMenuItem";
// import CategoriesMenuItem from "./CategoriesMenuItem";
// import { LucideIcon, Menu } from "lucide-react";
// import { useSidebar } from "@/components/ui/sidebar";
// import { useGlobalState } from "@/contexts/GlobalStateContext";
// import { useSidebar } from "@/contexts/SideBarContext";

export function Header({
  menuItems,
}: {
  menuItems: {
    name: string;
    path: string;
    // icon: LucideIcon;
  }[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState("Home");
  // const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const matchingItem = menuItems.find((item) => item.path === pathname);
    if (matchingItem) {
      setActive(matchingItem.name);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 w-full flex items-center justify-between px-[10%] pt-16 pb-8 z-8 transition-all duration-500 ${scrolled ? "bg-black/80 shadow-2xl" : ""}`}
    >
      <Link
        className="flex items-center hover:text-white transition-colors group"
        href="/"
      >
        {/* <Image
          className="rounded-full shadow-2xl border-4 border-[#f4f3e6] bg-[#f4f3e6]"
          src="/bakepointlogo.svg"
          alt="BakePoint logo"
          width="100"
          height="100"
        /> */}
        <span className="text-white/60 font-commandp text-6xl font-bold group-hover:text-white transition-colors">
          &lt;
        </span>
        <h1 className="font-semibold text-4xl text-violet-900 text-shadow-lg group-hover:text-white transition-colors">
          yoana_leon
        </h1>
        <span className="text-white/60 font-commandp text-6xl font-bold group-hover:text-white transition-colors">
          /&gt;
        </span>
      </Link>
      {/* <NavigationMenu> */}
      <div className={`xl:flex items-center gap-8 hidden `}>
        {menuItems.map((item) => (
          // <NavigationMenuItem
          //   key={item.name}
          //   // className={` ${scrolled ? "text-primary" : "text-text"} `}
          // >
          <Link
            key={item.name}
            className={`text-2xl font-semibold text-white/80 hover:text-white transition-colors font-font menuItemsDisplay  ${scrolled ? "scrolledItems" : ""}  ${item.name === active ? "active" : ""}`}
            href={item.path}
            onClick={(event) => setActive(item.name)}
          >
            {item.name}
          </Link>
          // </NavigationMenuItem>
        ))}

        {/* <CategoriesMenuItem scrolled={scrolled} />
          <UserMenuItem scrolled={scrolled} />
          <NavigationMenuItem>
            <Menu
              className={`menuItems xl:hidden flex size-8 cursor-pointer`}
              onClick={(event) => toggleSidebar()}
            />
          </NavigationMenuItem>
        </NavigationMenuList> */}
      </div>
      <Menu
        className={`xl:hidden flex text-white/80 hover:text-white transition-color  flex size-10 cursor-pointer`}
        // onClick={(event) => toggleSidebar()}
      />
    </header>
  );
}
