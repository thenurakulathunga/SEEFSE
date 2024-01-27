import React from "react";
import Image from "next/image";
import Logo from "/public/logo.svg";
import Link from "next/link";

function Navbar() {
  return (
    <div className="max-w-screen-lg w-full">
      <nav className="flex my-[26px] flex-col items-end gap-[1px] flex-[1_0_0%]">
        <div className="flex h-[66px] py-[1px] justify-between items-center self-stretch">
          <a
            href=""
            className="flex w-40 pt-[0.5px] pb-[7.05px] justify-center items-center"
          >
            <Image
              src={Logo}
              width={160}
              height={66}
              alt="Picture of the author"
            />
          </a>
          <div className="flex items-start gap-7">
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%]"
              href="/"
            >
              Professionals
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%]"
              href="/"
            >
              Homeowners
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%]"
              href="/"
            >
              Our Pools
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%]"
              href="/"
            >
              Project Gallery
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%]"
              href="/"
            >
              More Info
            </Link>
          </div>
          <button className="">
            <Link
              className="flex w-40 py-[9px] px-6 justify-center items-start gap-[10px] border-2 border-primary rounded-[32px] text-primary text-center text-[13px] font-bold leading-[150%]"
              href="/"
            >
              CTA
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
