"use client";
import React from "react";

export const PetCard = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-4 p-8 pb-20 sm:p-20">
                <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-pink-500 sm:w-32 sm:h-32"></div>
                    <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                        <div className="text-2xl font-bold">Lulu</div>
                        <div className="text-sm font-medium">Age: 6</div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 sm:w-32 sm:h-32"></div>
                    <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                        <div className="text-2xl font-bold">Lulu</div>
                        <div className="text-sm font-medium">Age: 6</div>
                            <div className="text-sm font-medium">Breed: Golden Retriever</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}