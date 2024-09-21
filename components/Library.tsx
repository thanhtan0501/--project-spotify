import { LibraryIcon, PlusIcon } from "@/assets/icons";
import React from "react";

const Library = () => {
    const onClick = () => {
        console.log(123);
    };
    return (
        <div className="flex flex-col">
            <div className=" flex items-center justify-between px-5 py-4">
                <div className="inline-flex items-center gap-x-4">
                    <LibraryIcon className="w-6 text-neutral-400" />
                    <p className="text-neutral-400 font-medium text-base hidden md:block">
                        Your Library
                    </p>
                </div>
                <PlusIcon
                    onClick={onClick}
                    className="w-5 hover:text-white transition text-neutral-400 cursor-pointer hidden md:block"
                />
            </div>
            <div className=" flex-col gap-y-2 mt-4 px-3 hidden md:flex">
                List of Songs!
            </div>
        </div>
    );
};

export default Library;
