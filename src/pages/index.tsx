import localFont from "next/font/local";
import ParallaxScrollContainer from "@/pages/component/ParallaxScrollContainer";
import React from "react";
import lulu1 from "../../assets/images/Lulu-1.jpg";
import siteData from "../../site-data.json";
import Image from "next/legacy/image";
import logo from "../../assets/images/logo.png";
import scrollDown from "../../assets/svg/scroll-down-white.svg";
import heroImage from "../../assets/images/Lulu-1.jpg";
import {HeroContent} from "@/pages/component/HeroContent";

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


const heroContent = {
    title: `Hi! My name is ${siteData?.petData?.name}`,
    description: `I'm a ${siteData?.petData?.age} year old ${siteData?.petData?.breed} from ${siteData?.petData?.location} and ${siteData?.petData?.funFact}!`,
}

export default function Home() {
    return (
        <div>
            <div className="absolute top-0 left-3"><Image {...logoImageProps}/></div>
            <div
                className={`${geistSans.variable} ${geistMono.variable} top-5 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
            >

                <ParallaxScrollContainer heroChildren={<HeroContent title={heroContent.title} description={heroContent.description} image={heroImage}/>}>
                    <div className="flex flex-col items-center justify-center gap-16 sm:flex-row">
                        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
                        </div></div>
                </ParallaxScrollContainer>
            </div>
        </div>
    );
}
