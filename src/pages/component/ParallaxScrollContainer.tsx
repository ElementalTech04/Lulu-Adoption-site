import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import siteData from "../../../site-data.json";

// @ts-ignore
const ParallaxScrollContainer = ({ image, children}) => {

    const imageProps: {src: string, layout: any} = {
        src: image.src,
        layout: "fill",
    }

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.5}px)`, // Adjust parallax intensity
    };
    console.log(image);


    // @ts-ignore
    return (
        <div>
            {/* Parallax Image Section */}
            <ParallaxScrollContainer>
                <div className="relative h-screen overflow-hidden">
                    <Image {...imageProps} className="rounded-lg"/>
                    <div
                        className="relative rounded-lg z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
                        <div className="grid grid-cols-3 grid-rows-4 width-full h-full gap-4">
                            <div className="col-start-2 col-end-4 row-start-1 row-end-2 flex flex-col text-white text-right pt-20 pr-5 text-wrap">
                                <h1 className="text-7xl font-extrabold">Hi! My name is {siteData?.petData?.name}</h1>
                                <p className="mt-4 text-lg">I am a {siteData?.petData?.age} year
                                    old {siteData?.petData?.breed} from {siteData?.petData?.location} and {siteData?.petData?.funFact}!</p>
                            </div>
                            <div className="absolute bottom-20 w-full flex flex-col items-center justify-end">
                                <Image {...scrollDownImageProps}/>
                                <p className="mt-3 text-md">Scroll down to see more about Lulu!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxScrollContainer>


            {/* Content Section */}
            <div className="px-4 py-16 bg-black bg-opacity-40 r">

            </div>
        </div>
    );
};

export default ParallaxScrollContainer;