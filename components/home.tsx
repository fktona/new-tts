"use client";

import Image from "next/image";
import CustomButton from "@/components/customButton";

export default function HomePage() {
  return (
    <div className="h-[85%] font-inter w-full flex flex-col items-center justify-center">
      <div className=" w-full h-full    flex items-center  justify-center text-center">
        <span className="md:text-[56px] font-[200] text-[40px] uppercase">
          truth intelligence
        </span>
      </div>
      {/* <div className="w-full h-full  relative  flex items-center  justify-center">
        <Image
          width={300}
          height={300}
          alt="circle"
          src={"/circle.png"}
          className="mju"
        />
        <div className="w-[300px] h-[300px] mju" />
      </div> */}

      {/* <div className="absolute bottom-0 flex justify-center  flex-col md:flex-row items-center gap-2 left-1/2 -translate-x-1/2 font-mono text-sm text-zinc-400">
        <CustomButton active={true} className="">
          ExCedGq3QtqWZ2Gjjxqy4GRXBdtf2MmGebnr3Tnpump
        </CustomButton>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              "ExCedGq3QtqWZ2Gjjxqy4GRXBdtf2MmGebnr3Tnpump"
            )
          }
        >
          <Image src="/paste.png" alt="logo" width={20} height={20} />
        </button>
      </div> */}
    </div>
  );
}
