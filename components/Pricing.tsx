import React from 'react';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function Pricing() {
  return (
    <div>
      <div className="mt-0 top-10 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 980 300"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <path
            fill="rgba(231, 236, 255, 0.5)"
            d="M0,128L80,160C160,192,320,256,480,256C640,256,800,192,960,160C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div
        className='py-10 relative z-10'
        style={{
          backgroundColor: "rgba(231, 236, 255, 0.5)",
        }}
      >
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              className="mt-2"
              style={{ fontSize: "36px", fontWeight: "500", color: "#091133" }}
            >
              A Price To Suit Everyone
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: "16px", fontWeight: "400", color: "#6F7CB2" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>
          </div>

          <div className="mx-auto max-w-2xl sm:text-center mt-10">
            <h2
              style={{ fontSize: "40px", fontWeight: "500", color: "#222F65" }}
            >
              $40
            </h2>
            <p
              className="mt-0"
              style={{ fontSize: "16px", fontWeight: "400", color: "#37447E" }}
            >
              UI Design Kit
            </p>
          </div>

          <div
            className="mx-auto max-w-2xl sm:text-center mt-15"
            style={{ marginTop: "20px" }}
          >
            <p
              style={{ fontSize: "14px", fontWeight: "400", color: "#5D6970" }}
            >
              See, One price. Simple.
            </p>

            <p className="mt-1 text-lg text-gray-600">
              <Link
                className={`${buttonVariants({
                  size: "lg",
                })} font-medium`}
                href="/sign-up"
              >
                Purchase Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
