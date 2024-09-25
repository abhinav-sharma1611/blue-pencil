import Link from "next/link";
import Image from 'next/image';
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#E7ECFF" }}>
            <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
                <div className="flex items-center justify-between my-5">
                    <span className="text-sm text-muted-foreground" style={{ color: "#939EA4" }}>
                        ©2023&nbsp; Blue Pencil
                    </span>
                    <Link
                        className={`${buttonVariants({
                            size: "lg",
                        })} font-medium`}
                        href="/sign-up"
                    >
                        Purchase Now
                    </Link>
                </div>
                <hr
                    className="my-2"
                    style={{ backgroundColor: "#CDD1D4", height: "1px" }}
                />

                <div className="flex items-center justify-between" style={{ color: "#929ECC" }}>
                    <div className="hidden sm:flex space-x-4">
                        <Link
                            href="/home"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex space-x-4 ml-auto">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src='/facebook.png'
                                alt="Facebook"
                                width={16}
                                height={16}
                            />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src='/linkedin.png'
                                alt="LinkedIn"
                                width={16}
                                height={16}
                            />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src='/twitter.png'
                                alt="Twitter"
                                width={16}
                                height={16}
                            />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src='/youtube.png'
                                alt="YouTube"
                                width={16}
                                height={16}
                            />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src='/instagram.png'
                                alt="Instagram"
                                width={16}
                                height={16}
                            />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
