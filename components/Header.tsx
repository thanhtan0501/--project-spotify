"use client";

import { SpotifyIcon } from "@/assets/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface headerProps {
    className?: string;
}

const Header: React.FC<headerProps> = ({ className }) => {
    const router = useRouter();

    const handleLogout = () => {};

    return (
        <div
            className={twMerge(
                `flex justify-between items-center h-[48px] relative`,
                className
            )}
        >
            <div className="flex items-center">
                <Link href={"/"} className="m-5 cursor-pointer">
                    <SpotifyIcon className="w-6 h-6" />
                </Link>
            </div>
            <div className="w-full flex items-center">
                <div className="hidden md:flex gap-x-2 items-center">
                    Header
                </div>
            </div>
        </div>
    );
};

export default Header;
