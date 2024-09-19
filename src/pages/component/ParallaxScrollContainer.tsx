import React, { useEffect, useState } from "react";
import Image from "next/image";

// @ts-ignore
const ParallaxScrollContainer = ({ image, children}) => {

    const imageProps = {
        src: image.src,
        alt: "Parallax Background",
        layout: "fill",
        objectFit: "cover"
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
            <div className="relative h-screen overflow-hidden">
                <Image {...imageProps} priority={true} className="absolute inset-0 object-cover w-full h-full" style={parallaxStyle}/>
                <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
                    {/* Child component or content over the parallax image */}
                    {children}
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 py-16 bg-black bg-opacity-40 r">
            </div>
        </div>
    );
};

export default ParallaxScrollContainer;