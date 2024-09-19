import localFont from "next/font/local";
import ParallaxScrollContainer from "@/pages/component/ParallaxScrollContainer";
import React from "react";
import lulu1 from "../../assets/images/Lulu-1.jpg";

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

export default function Home() {
    return (
        <div
            className={`${geistSans.variable} ${geistMono.variable} p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        >
            <ParallaxScrollContainer image={lulu1}>
                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold">Hi! My name is Lulu</h1>
                    <p className="mt-4 text-lg">I am a 6 year old border collie/labrador/Burmese mountain dog mix and the best cuddler. Scroll down to find out more about me.</p>
                </div>
            </ParallaxScrollContainer>
        </div>
    );
}
