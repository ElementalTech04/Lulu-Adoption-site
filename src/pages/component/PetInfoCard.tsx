"use client";
import React, {useState} from "react";
import Image from "next/image";
import {PetInfoCardProps} from "@/pages/interface/types";
import {motion} from "framer-motion";


export const PetInfoCard: React.FC<PetInfoCardProps> = ({
                                                            picture,
                                                            petType,
                                                            gender,
                                                            weight,
                                                            height,
                                                            physique,
                                                            name,
                                                            dob,
                                                            breed,
                                                            location,
                                                            bio,
                                                        }) => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    // Update the mouse position based on the event
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left - rect.width / 4, // Calculate offset relative to the center
            y: e.clientY - rect.top - rect.height / 5,
        });
    };

    return (
        <>
            <h1 className="w-1/2 mx-auto text-left text-5xl text-white font-extrabold mt-24">Pet Info Card</h1>
            <motion.div
                onMouseMove={handleMouseMove}
                style={{
                    perspective: 1000, // Add perspective for a 3D effect
                }}
                whileHover={{
                    x: mousePosition.x * 0.1, // Scale down the movement for smoother animation
                    y: mousePosition.y * 0.1,
                    rotateX: mousePosition.y * 0.05,
                    rotateY: -mousePosition.x * 0.05,
                    scale: 1.05, // Slightly scale up on hover
                    transition: {type: "spring", stiffness: 200, damping: 15},
                }}
            >
                <div
                    className="w-1/2 mx-auto rounded-lg shadow-lg bg-gradient-to-r from-pink-600/50 via-purple-800/50 to-sky-700/50 text-white p-5 mt-2 mb-11 al-center">

                    <div className="flex items-center space-x-4">
                        {/* Pet Picture */}
                        <div className="relative w-24 h-24 border-1 border-gray-300 rounded-md overflow-hidden">
                            <Image src={picture} alt={`${name} picture`} fill className="object-cover"/>
                        </div>

                        {/* Pet Information */}
                        <div className="flex-1">
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p className="text-sm text-gray-300">DOB: {dob}</p>
                            <p className="text-sm text-gray-300">Breed: {breed}</p>
                            <p className="text-sm text-gray-300">Gender: {gender}</p>
                            <p className="text-sm text-gray-300">Location: {location}</p>
                        </div>
                    </div>

                    {/* Additional Physical Info */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-smfont-extrabold">Physical Attributes</h2>
                            <p className="text-sm text-gray-300">Weight: {weight} lbs</p>
                            <p className="text-sm text-gray-300">Height: {height} in</p>
                            <p className="text-sm text-gray-300">Physique: {physique}</p>
                        </div>
                        {/* Pet Bio */}
                        <div>
                            <h2 className="text-sm font-semibold">Bio:</h2>
                            <p className="text-sm text-gray-300">{bio}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
