"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface MainHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const CATEGORIES = [
    {
        label: "all",
        isChecked: true,
    },
    {
        label: "music",
        isChecked: false,
    },
    {
        label: "podcasts",
        isChecked: false,
    },
];

const MainHeader: React.FC<MainHeaderProps> = ({ children, className }) => {
    const router = useRouter();

    const handleLogout = () => {};
    return (
        <>
            <div
                className={twMerge(
                    `h-[300px] bg-gradient-to-b from-[#393939] absolute top-0 left-0 right-0`
                )}
            ></div>
            <div className={twMerge(`sticky p-4`, className)}>
                <div className="flex gap-x-2 items-center">
                    {CATEGORIES.map((cate) => (
                        <button
                            key={cate.label}
                            role="checkbox"
                            aria-checked={cate.isChecked}
                            aria-label={cate.label}
                            defaultChecked={cate.isChecked}
                            className={twMerge(
                                `rounded-full bg-[#ffffff1a] hover:bg-[#ffffff24] text-neutral-400 hover:text-white px-3 py-1 font-semibold transition-all truncate`,
                                cate.isChecked &&
                                    "bg-white text-black hover:bg-[#f0f0f0] hover:text-black"
                            )}
                        >
                            {cate.label.charAt(0).toUpperCase() +
                                cate.label.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
            {children}
        </>
    );
};

export default MainHeader;
