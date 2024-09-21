import React, {useEffect, useState} from "react";

const ParallaxScrollContainer = ({heroChildren, children}: {heroChildren: any, children: any }) => {



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


    // @ts-ignore
    return (
        <div>
            {/* Parallax Image Section */}
            <div className="z-0 relative h-screen overflow-hidden" style={parallaxStyle}>
                {heroChildren}
            </div>
            {/* Content Section */}
            <div className="z-10 px-4 bg-black bg-opacity-40 r">
                {children}
            </div>
        </div>
    );
};

export default ParallaxScrollContainer;