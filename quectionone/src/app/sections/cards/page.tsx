import React from "react";
import Image from "next/image";
import Family from "/src/app/asset/image/family.png";
import Children from "/src/app/asset/image/children.png";

function Cards() {
  return (
    <div className="flex max-w-[1040px] w-full py-[54px] px-[30px] sm:px-0 sm:py-[120px] flex-col items-center gap-[72px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[862px] items-center gap-[68px] ">
        <div className="order-1">
          <Image
            src={Family}
            width={397}
            height={397}
            alt="globle image"
            className="rounded-[16px]"
          />
        </div>
        <div className="flex py-10 flex-col items-start gap-[38px] flex-[1_0_0%] order-2">
          <h3 className="self-stretch text-primary font-plus text-[29px] font-[700] leading-[125%]">
            Premium Quality, Rigorously tested
          </h3>
          <p className="self-stretch font-plus text-[16px] font-[400] leading-[150%]">
            Every Plungie is manufactured in quality controlled facilities in
            Brisbane, Queensland and Kilmore, Victoria - we know to the gram how
            much steel and concrete is in it. This controlled factory
            environment allows us to produce a proven and tested concrete
            products.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[862px] items-center gap-[68px]">
        <div className="order-1 sm:order-2">
          <Image
            src={Children}
            width={397}
            height={397}
            alt="globle image"
            className="rounded-[16px]"
          />
        </div>
        <div className="flex py-10 flex-col items-start gap-[38px] flex-[1_0_0%] order-2 sm:order-1">
          <h3 className="self-stretch text-primary font-plus text-[29px] font-[700] leading-[125%]">
            We hope to ensure future generations
          </h3>
          <p className="self-stretch font-plus text-[16px] font-[400] leading-[150%]">
            We believe pools are the heartbeat of the Australian backyard.
            They're the sound of Summer; the sound of families and children
            enjoying where they live. 
			<br /><br />
			Plungie is not just a pool... Plungie is a
            hot Christmas spent in the backyard, playing classic catches in the
            pool.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
