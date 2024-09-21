import localFont from "next/font/local";
import ParallaxScrollContainer from "@/pages/component/ParallaxScrollContainer";
import React from "react";
import lulu1 from "../../assets/images/Lulu-1.jpg";
import siteData from "../../site-data.json";
import Image from "next/legacy/image";
import logo from "../../assets/images/logo.png";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const logoImageProps: { src: string, width: number, height: number, layout: any } = {
    src: logo.src,
    width: 115,
    height: 100,
    layout: "fixed",
}

const scrollDownImageProps: { src: string, width: number, height: number, layout: any } = {
    src: scrollDown.src,
    width: 50,
    height: 75,
    layout: "fixed",
}

export default function Home() {
    return (
        <div>
            <div className="absolute top-0 left-3"><Image {...logoImageProps}/></div>
            <div
                className={`${geistSans.variable} ${geistMono.variable} top-5 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
            >

                <ParallaxScrollContainer image={lulu1}>

                </ParallaxScrollContainer>
            </div>
        </div>
    );
}
