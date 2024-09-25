import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Facebook from "../public/facebook.png";
import Linkedin from "../public/linkedin.png";
import Twitter from "../public/twitter.png";
import Youtube from "../public/youtube.png";
import Instagram from "../public/instagram.png";

export default function Footer() {
  return (
    <footer className="" style={{ backgroundColor: "#E7ECFF" }}>
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
              <img src={Facebook.src} alt="Facebook" style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin.src} alt="LinkedIn" style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter.src} alt="Twitter" style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={Youtube.src} alt="YouTube" style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram.src} alt="Instagram" style={{ width: "16px", height: "16px" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
