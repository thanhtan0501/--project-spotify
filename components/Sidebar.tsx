"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

import { HomeIcon, SearchIcon } from "@/assets/icons";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { IconType } from "react-icons";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(
        () => [
            {
                icon: HomeIcon as IconType,
                label: "Home",
                active: pathname !== "/search",
                href: "/",
            },
            {
                icon: SearchIcon as IconType,
                label: "Search",
                active: pathname === "/search",
                href: "/search",
            },
        ],
        [pathname]
    );

    return (
        <div className="flex-1 flex h-full gap-2">
            <div className="flex flex-col gap-y-2 bg-black w-[60px] md:w-[300px] h-full">
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">
                        {routes.map((item) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library />
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto relative">
                {children}
            </main>
        </div>
    );
};

export default Sidebar;
