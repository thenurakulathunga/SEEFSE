import React from "react";
import DropIcon from "/src/app/asset/image/drop-Icons.svg";
import Image from "next/image";

function Form() {
  return (
    <div className="max-w-screen-lg my-[98px] h-[906px] gap-[10px] bg-[rgba(186,216,222,0.30)] w-full relative">
      <form
        action=""
        className="p-[54px] w-[600px] flex flex-col items-start gap-[24px] absolute left-[420px] top-[103px] rounded-[16px] bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.06)]"
      >
        <h4 className="text-primary text-center font-plus text-[21px] font-[500] leading-[150%]">
          General Enquiries
        </h4>

        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex items-start gap-4 self-stretch">
            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="f_name"
                className="text-light-secondary font-arial text-[12px] font-[400] leading-[160%] "
              >
                First Name*
              </label>
              <input
                id="f_name"
                type="text"
                className="flex py-2 px-3 flex-col items-start h-10 self-stretch rounded-[4px] border strock-[#C4C4C4] bg-white w-[238px]"
              />
            </div>
            <div className="flex flex-col items-start gap-1 ">
              <label
                htmlFor="l_name"
                className="text-light-secondary font-arial text-[12px] font-[400] leading-[160%] "
              >
                Last Name*
              </label>
              <input
                id="l_name"
                type="text"
                className="flex py-2 px-3 flex-col items-start h-10 self-stretch rounded-[4px] border strock-[#C4C4C4] bg-white w-[238px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label
              htmlFor="email"
              className="text-light-secondary font-arial text-[12px] font-[400] leading-[160%] "
            >
              Email*
            </label>
            <input
              id="email"
              type="text"
              className="flex py-2 px-3 flex-col items-start h-10 self-stretch rounded-[4px] border strock-[#C4C4C4] w-full bg-white"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label
              htmlFor="tpno"
              className="text-light-secondary font-arial text-[12px] font-[400] leading-[160%] "
            >
              Phone*
            </label>
            <input
              id="tpno"
              type="text"
              className="flex py-2 px-3 flex-col items-start h-10 self-stretch rounded-[4px] border strock-[#C4C4C4] w-full bg-white"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label
              htmlFor="self"
              className="text-light-secondary font-arial text-[12px] font-[400] leading-[160%] "
            >
              How would you describe yourself?*
            </label>
            <div
              id="self"
              className="flex py-2 px-3 flex-row justify-between items-start self-stretch rounded-[4px] border strock-[#C4C4C4] w-full bg-white relative text-[#c4c4c4] font-plus h-10"
            >
              <p>please select</p>
              <Image
                src={DropIcon}
                width={18}
                height={18}
                alt="globle image"
                className="rounded-[16px]"
              />
              <div className="flex-col items-start text-light-secondary text-[12px] p-1 w-full absolute border dorder-[#C4C4C4] top-[50px] left-0 hidden">
                <button className="w-full hover:bg-light-secondary text-start">
                  Please Select
                </button>
                <button className="w-full hover:bg-light-secondary text-start">
                  option one
                </button>
                <button className="w-full hover:bg-light-secondary text-start">
                  option two
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label
              htmlFor="messageDescription"
              className="text-light-secondary font-arial text-[12px] font-[400] leading-[160%] "
            >
              Message
            </label>
            <input
              id="messageDescription"
              type="text"
              className="flex py-2 px-3 flex-col items-start h-10 self-stretch rounded-[4px] border strock-[#C4C4C4] w-full bg-white"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label
              htmlFor="tpno"
              className="text-light-secondary font-arial text-[12px] font-[400] leading-[160%] "
            >
              Phone*
            </label>
            <textarea
              id="tpno"
              className="flex py-2 px-3 flex-col items-start h-[109.63px] self-stretch rounded-[4px] border strock-[#C4C4C4] w-full bg-white "
            ></textarea>
          </div>
          <input
            type="submit"
            className="bg-secondary flex py-[9px] px-6 justify-center items-start gap-4 rounded-[32px]"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
