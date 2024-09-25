import React from 'react'
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import HeroImage from "../public/designer_1 (2).png"

function HeroSection() {
    return (
        <div className="relative flex items-center justify-start text-left sm:h-[400px] h-auto w-full">
            <img
                src={HeroImage.src}
                alt="Your Image"
                style={{
                    position: "absolute",
                    right: "0%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "50%",
                    height: "auto",
                }}
            />
            <div className="bg-white bg-opacity-70  sm:p-10 ml-10 mt-20 max-w-lg sm:max-w-none p-10">
                <h1 style={{ fontSize: "50px", fontWeight: 500, color: "#091133" }}>
                    Introduce Your Product <br></br> Quickly & Effectively
                </h1>
                <p style={{ fontSize: "18px", fontWeight: 400, color: "#505F98" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  <br></br>commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque  <br></br> penatibus et magnis
                    dis parturient montes, nascetur ridiculus  <br></br> mus. Donec quam felis, ultricies
                    nec, pellentesque eu, pretium quis,<br></br> sem. Nulla consequat massa quis enim.
                </p>

                <div className="flex space-x-4 mt-10">
                    <Link
                        className={cn(
                            buttonVariants({
                                size: "lg",
                            }),
                            "text-lg"
                        )}
                        href={"/dashboard"}
                    >
                        Purchase UI Kit
                    </Link>

                    <Link
                        className={cn(
                            buttonVariants({
                                size: "lg",
                            }),
                            "text-lg"
                        )}
                        style={{
                            backgroundColor: "#FFFFFF",
                            color: "#111B47",
                            border: "2px solid #111B47",
                            borderRadius: "4px",
                            padding: "10px 20px",
                            textAlign: "center",
                        }}
                        href={"/learn-more"}
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
