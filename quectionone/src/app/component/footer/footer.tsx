import React from "react";
import Image from "next/image";
import Logo from "/public/logo.svg";
import FB from "/src/app/asset/image/fb.svg";
import INSTA from "/src/app/asset/image/insta.svg";
import Printerest from "/src/app/asset/image/printerest.svg";
import YT from "/src/app/asset/image/yt.svg";
import Likeind from "/src/app/asset/image/likeind.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="max-w-screen-lg py-[64px] w-full h-[412px]  flex flex-coll items-center gap-7 justify-center">
      <div className="flex w-[1040px] justify-between items-start">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col gap-[38px] self-stretch">
            <div className="flex flex-col gap-4">
              <Image
                src={Logo}
                width={160}
                height={41}
                alt="Picture of the author"
              />
              <div>
                <p className="text-light-secondary font-plus text-[13px] font-[400] leading-[125%]">
                  © 2023 Plungie{" "}
                </p>
                <Link
                  href=""
                  className="text-primary font-plus text-[13px] font-[700] leading-[125%] underline"
                >
                  Privacy Policy{" "}
                </Link>
              </div>
            </div>
            <div>
              <Link
                href=""
                className="text-secondary font-plus text-[13px] font-[700] leading-[150%]"
              >
                Keep in Touch
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="">
              <Image src={FB} width={20} height={20} alt="social" />
            </a>
            <a href="">
              <Image src={INSTA} width={20} height={20} alt="social" />
            </a>
            <a href="">
              <Image src={Printerest} width={20} height={20} alt="social" />
            </a>
            <a href="">
              <Image src={YT} width={20} height={20} alt="social" />
            </a>
            <a href="">
              <Image src={Likeind} width={20} height={20} alt="social" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-5 max-w-[775px] w-full gap-[39px]">
          <div className="col-span-3 grid grid-cols-3 gap-[39px]">
            <div className="flex flex-col w-[120px] gap-4">
              <p className="text-secondary font-plus tetx-[13px] font-[700] leading-[150%]">
                Plungie for
              </p>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Builders
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Architects
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Landscapers
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Homeowners
              </a>
            </div>
            <div className="flex flex-col w-[120px] gap-4">
              <p className="text-secondary font-plus tetx-[13px] font-[700] leading-[150%]">
                Our Pools
              </p>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Arena
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Studio
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Original
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Max
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Compare Pools
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Why Plungie?
              </a>
            </div>
            <div className="flex flex-col w-[120px] gap-4">
              <p className="text-secondary font-plus tetx-[13px] font-[700] leading-[150%]">
                Accessories
              </p>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Equipment
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Add-ons
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Interior coating
              </a>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-[39px]">
            <div className="flex flex-col w-[120px] gap-4">
              <p className="text-secondary font-plus tetx-[13px] font-[700] leading-[150%]">
                More Info
              </p>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Process
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Delivery
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Payment
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Warranty
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Find Installer
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Display Locations
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Downloads
              </a>
            </div>
            <div className="flex flex-col w-[120px] gap-4">
              <p className="text-secondary font-plus tetx-[13px] font-[700] leading-[150%]">
                Company
              </p>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                About
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                History
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-light-[#434244] font-plus text-[13px] font-[400] leading-[150%]"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
