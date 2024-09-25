import React from 'react'
import Image from "next/image";

import Icon from "../public/Icon.png"
import Feature4 from "../public/feature5.png"

function Featured() {
    return (
        <div className="mt-10 mx-auto flex max-w-5xl flex-col gap-20 sm:mt-60 sm:gap-40">
            <div className="mb-6 px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="max-w-lg">
                        <h2
                            className="mt-2 font-bold"
                            style={{ fontSize: "36px", color: "#091133", fontWeight: 500 }}
                        >
                            Light, Fast & Powerful
                        </h2>
                        <p
                            className="mt-4"
                            style={{ fontSize: "16px", color: "#6F7CB2" }}
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus <br /><br /> mus. Donec quam
                            felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="flex flex-col items-start space-y-4">
                                <img
                                    src={Icon.src}
                                    alt="Facebook"
                                    style={{ width: "36px", height: "36px" }}
                                />
                                <h3
                                    className="font-semibold"
                                    style={{ fontSize: "16px", color: "#091133" }}
                                >
                                    Title Goes Here
                                </h3>
                                <p
                                    className="mt-2"
                                    style={{ fontSize: "12px", color: "#5D6970" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <img
                                    src={Icon.src}
                                    alt="Facebook"
                                    style={{ width: "36px", height: "36px" }}
                                />
                                <h3
                                    className="font-semibold"
                                    style={{ fontSize: "16px", color: "#091133" }}
                                >
                                    Title Goes Here
                                </h3>
                                <p
                                    className="mt-2"
                                    style={{ fontSize: "12px", color: "#5D6970" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-6">
                        <Image
                            src={Feature4}
                            alt="Language Learning AI Tutor"
                            className="w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
