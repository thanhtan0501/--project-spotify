import Card from "@/components/Card";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto relative">
                <MainHeader>
                    <section className="pt-3 px-4 relative">
                        <div className="flex flex-wrap gap-x-8 gap-y-6">
                            <div className="relative bg-transparent grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 w-full">
                                <ListItem />
                            </div>
                            <div className="w-full flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <h2 className="font-bold text-[1.5rem] hover:underline transition leading-none">
                                        <Link href="/">Popular radios</Link>
                                    </h2>
                                    <span className="hover:underline transition text-[#b3b3b3] font-bold text-[0.875rem] leading-none">
                                        <Link href="/">More</Link>
                                    </span>
                                </div>
                                <div className="flex flex-row ">
                                    <Card href="/" image_url="/" />
                                </div>
                            </div>
                        </div>
                    </section>
                </MainHeader>
            </div>
        </>
    );
}
