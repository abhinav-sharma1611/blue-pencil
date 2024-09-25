'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set to true when scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky h-14 inset-x-0 top-0 z-30 transition-all duration-300",
        isScrolled ? "bg-white shadow-md backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between w-full">
          <div className="flex items-center space-x-4" style={{ color: "#505F98" }}>
            <MobileNav />
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
          </div>

          <div className="flex items-center ml-auto">
            <Link
              className={`${buttonVariants({
                size: "lg",
              })} font-medium`}
              href="/sign-up"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
