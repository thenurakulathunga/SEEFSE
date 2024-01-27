import React from "react";
import Image from "next/image";
import Globle from "/src/app/asset/image/globle.svg";
import Hart from "/src/app/asset/image/hart.svg";
import Work from "/src/app/asset/image/work.png";

function About() {
  return (
    <div className="flex flex-col items-end gap-[10px] self-stretch w-[375px] sm:w-[1440px] mx-auto ">
      <div className="flex w-full sm:max-w-[1240px] items-center gap-[112px] flex-col sm:flex-row">
        <div className="flex sm:w-[464px] py-[68px] flex-col items-start gap-6 sm:gap-[10px] flex-shrink-0 px-[30px] py-[38px] sm:p-0">
          <span className="text-secondary font-plus text-[13px] font-[700] leading-[150%]">
            Our story
          </span>
          <h2 className="text-primary font-plus text-[45px] font-[700] leading-[115%]">
            Every Australian deserves a pool
          </h2>
          <p className="text-primary font-plus text-[16px] font-[400] leading-[150%]">
            Our patented range of Plungie Pools are an award-winning,
            world-first product that’s pioneering the future of swimming pools;
            bringing the fastest, easiest and highest quality concrete pool to
            the market.
          </p>
          <div className="flex sm:items-center gap-6 sm:gap-[38px] items-start self-stretch flex-col sm:flex-row">
            <div className="flex justify-center items-center gap-[24px] flex-[1_0_0%]">
              <div className="w-11 h-11 bg-accent flex-shrink-0 rounded-full flex justify-center items-center">
                <Image src={Globle} width={24} height={24} alt="globle image" />
              </div>
              <p className="text-primary self-stretch font-plus text-[13px] font-[700] leading-[150%]">
                100% Australian Owned and Operated
              </p>
            </div>
            <div className="flex justify-center items-center gap-[24px] flex-[1_0_0%]">
              <div className="w-11 h-11 bg-accent flex-shrink-0 rounded-full flex justify-center items-center">
                <Image src={Hart} width={24} height={24} alt="hart image" />
              </div>
              <p className="text-primary self-stretch font-plus text-[13px] font-[700] leading-[150%]">
                Supporting local builders to do what they do best
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-[664px] h-[551px] bg-[url('/src/app/asset/image/work.png')] bg-cover bg-center">
        </div> */}
        <Image src={Work} width={664} height={551} alt="work image" />
      </div>
    </div>
  );
}

export default About;
