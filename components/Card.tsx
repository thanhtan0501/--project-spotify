import Link from "next/link";
import React from "react";

interface CardProps {
    title?: string;
    subtitle?: string;
    image_url: string;
    href: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    image_url,
    href,
    className,
}) => {
    return (
        <Link
            href={href}
            className="group flex flex-col gap-2 rounded-md cursor-pointer bg-white"
        >
            Card
        </Link>
    );
};

export default Card;
