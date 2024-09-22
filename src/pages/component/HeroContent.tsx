"use client";
import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

import scrollDown from "../../../assets/svg/scroll-down-white.svg";

// Motion variants for animations
const titleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.2,
        },
    },
};

const descriptionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.4,
        },
    },
};

const scrollImageVariants = {
    bounce: {
        y: [0, -10, 0],
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        },
    },
};

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, delay: 0.6 },
    },
};

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
            <div className="relative rounded-lg z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
                <div className="grid grid-cols-3 grid-rows-4 width-full h-full gap-4">
                    <div
                        className="col-start-2 col-end-4 row-start-1 row-end-2 flex flex-col text-white text-right pt-20 pr-5 text-wrap">
                        {/* Title with fly-in animation */}
                        <motion.h1
                            className="text-7xl font-extrabold"
                            initial="hidden"
                            animate="visible"
                            variants={titleVariants}
                        >
                            {title}
                        </motion.h1>
                        {/* Description with fly-in animation */}
                        <motion.p
                            className="mt-4 text-lg"
                            initial="hidden"
                            animate="visible"
                            variants={descriptionVariants}
                        >
                            {description}
                        </motion.p>
                    </div>
                    {/* Scroll down image with bounce animation */}
                    <div className="absolute bottom-52 w-full flex flex-col items-center justify-end">
                        <motion.div
                            animate="bounce"
                            variants={scrollImageVariants}
                        >
                            <Image {...scrollDownImageProps} />
                        </motion.div>
                        {/* Scroll down message with fade-in animation */}
                        <motion.p
                            className="mt-3 text-md"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            {scrollDownMessage}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}