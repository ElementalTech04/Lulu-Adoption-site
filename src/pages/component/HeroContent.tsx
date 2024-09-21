import Image from "next/legacy/image";
import siteData from "../../../site-data.json";
import React from "react";
import scrollDown from "../../../assets/svg/scroll-down-white.svg";



export const HeroContent = ({ title, description, image, scrollDownMessage }: { title: string, description: string, image: any, scrollDownMessage: string }) => {

    const imageProps: { src: string, layout: any } = {
        src: image.src,
        layout: "fill",
    }

    const scrollDownImageProps: { src: string, width: number, height: number, layout: any } = {
        src: scrollDown.src,
        width: 50,
        height: 75,
        layout: "fixed",
    }

    return (
        <div>
            <Image {...imageProps} className="rounded-lg z-0"/>
            <div
                className="relative rounded-lg z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
                <div className="grid grid-cols-3 grid-rows-4 width-full h-full gap-4">
                    <div
                        className="col-start-2 col-end-4 row-start-1 row-end-2 flex flex-col text-white text-right pt-20 pr-5 text-wrap">
                        <h1 className="text-7xl font-extrabold">{title}</h1>
                        <p className="mt-4 text-lg">{description}</p>
                    </div>
                    <div className="absolute bottom-52 w-full flex flex-col items-center justify-end">
                        <Image {...scrollDownImageProps}/>
                        <p className="mt-3 text-md">{scrollDownMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}