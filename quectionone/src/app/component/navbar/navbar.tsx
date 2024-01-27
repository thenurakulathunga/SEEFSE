"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/logo.svg";
import MenuIcon from "/src/app/asset/image/menuicon.svg";
import MenuCloseIcon from "/src/app/asset/image/close.svg";
import Link from "next/link";

function Navbar() {
  const [showNavlinks, isShowNavlinks] = useState(false);
  const toggleMobilebutton = () => {
    isShowNavlinks(!showNavlinks);
  };

  return (
    <div className="max-w-[1040px] w-full">
      <nav className="flex sm:my-[26px] flex-col items-end gap-[1px] flex-[1_0_0%]">
        <div className="flex sm:h-[66px] sm:py-[1px] py-[18px] px-[30px] justify-between items-center self-stretch">
          <a
            href=""
            className="flex w-40 sm:pt-[0.5px] sm:pb-[7.05px] justify-center items-center"
          >
            <Image
              className="w-[123px] h-[32px]"
              src={Logo}
              // width={160}
              // height={66}
              alt="Picture of the author"
            />
          </a>
          <button className="sm:hidden w-[37px] h-[37px] flex justify-center items-center" onClick={toggleMobilebutton}>
            <Image
              src={showNavlinks ? MenuCloseIcon : MenuIcon}
              // width={160}
              // height={66}
              alt="Picture of the author"
            />
          </button>

          <div className="sm:flex items-start gap-7 hidden">
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%] cursor-pointer"
              href="/"
            >
              Professionals
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%] cursor-pointer"
              href="/"
            >
              Homeowners
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%] cursor-pointer"
              href="/"
            >
              Our Pools
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%] cursor-pointer"
              href="/"
            >
              Project Gallery
            </Link>
            <Link
              className="text-primary text-center font-plus text-[13px] leading-[125%] cursor-pointer"
              href="/"
            >
              More Info
            </Link>
          </div>
          <Link
            className="hidden sm:flex w-40 py-[9px] px-6 justify-center items-start gap-[10px] border-2 border-primary rounded-[32px] text-primary text-center text-[13px] font-bold leading-[150%] hover:border-[#00BED6] hover:text-[#00BED6]"
            href="/"
          >
            CTA
          </Link>
        </div>
      </nav>
      <div
        className={` flex-col gap-[36px] px-[30px] pt-[14px] pb-[38px]  ${
          showNavlinks ? "flex" : "hidden"
        }`}
      >
        <Link
          className="text-primary text-start font-plus text-[21px] leading-[150%] font-[500] cursor-pointer"
          href="/"
        >
          Professionals
        </Link>
        <Link
          className="text-primary text-start font-plus text-[21px] leading-[150%] font-[500] cursor-pointer"
          href="/"
        >
          Homeowners
        </Link>
        <Link
          className="text-primary text-start font-plus text-[21px] leading-[150%] font-[500] cursor-pointer"
          href="/"
        >
          Our Pools
        </Link>
        <Link
          className="text-primary text-start font-plus text-[21px] leading-[150%] font-[500] cursor-pointer"
          href="/"
        >
          Project Gallery
        </Link>
        <Link
          className="text-primary text-start font-plus text-[21px] leading-[150%] font-[500] cursor-pointer"
          href="/"
        >
          More Info
        </Link>
        <Link
          className="flex w-full py-[9px] px-6 justify-center items-start gap-[10px] border-2 border-primary rounded-[32px] text-primary text-center text-[13px] font-bold leading-[150%] hover:border-[#00BED6] hover:text-[#00BED6]"
          href="/"
        >
          CTA
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
