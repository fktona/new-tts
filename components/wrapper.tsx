"use client";
import { useAppContext } from "@/app/context/context";
import { cn } from "@/lib/utils";

function Wrapper({ children }: { children: React.ReactNode }) {
  const { show } = useAppContext();

  return (
    <>
      <iframe
        src="https://my.spline.design/particlenebulacopy-5f3382e8ff624a908a21b10a995d4d52/"
        frameBorder="0"
        width="100%"
        height="100%"
        className={cn(
          "fixed top-0 inset-0 blur-md left-0 w-full h-full",
          !show && "blur-none"
        )}
      ></iframe>

      <div className="absolute right-3  bottom-5 z-1 w-[165px] h-[30px] bg-black"></div>

      <div className="fixed top-0 left-0 w-full h-full bg-black/60"></div>
      {children}
    </>
  );
}

export default Wrapper;
