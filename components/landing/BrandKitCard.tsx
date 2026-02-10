import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BrandKitCardProps {
  className?: string;
}

export function BrandKitCard({ className }: BrandKitCardProps) {
  return (
    <div className={cn(
      "relative h-fit bg-white border border-[rgba(234,236,245,0.4)] rounded-2xl shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)] py-4 px-2 flex flex-col gap-2",
      className
    )}>
      {/* Brand Colors Row */}
      <div className="flex gap-2">
        <div className="border-[1.3px] border-white w-11 h-11 rounded-full bg-[#1e2029] shadow-[0px_0.65px_1.3px_0px_#1018280F,0px_0.65px_1.95px_0px_#1018281A]" />
        <div className="border-[1.3px] border-white w-11 h-11 rounded-full bg-[#635BFF] shadow-[0px_0.65px_1.3px_0px_#1018280F,0px_0.65px_1.95px_0px_#1018281A]" />
        <div className="border-[1.3px] border-white w-11 h-11 rounded-full bg-[#FF6B2C] shadow-[0px_0.65px_1.3px_0px_#1018280F,0px_0.65px_1.95px_0px_#1018281A]" />
      </div>

      {/* Brand Assets Row */}
      <div className="flex gap-2 items-center">
        <Button variant="light">
          <Image src="/media/icons/mark.svg" alt="Logo" width={16} height={16} />
          <span className="font-semibold text-[15.43px] leading-[23.34px]">Logo</span>
        </Button>

        <Button variant="dark">
          <div className="size-full hover:bg-[#F4F9FF] flex items-center justify-center">
            <span className=" bg-clip-text text-transparent hover:text-black font-bold text-[12px] leading-none hover:bg-none bg-[linear-gradient(135deg,#f8f9fa_0%,#64d2ff_100%)]">
              Typeface
            </span></div>
        </Button>
      </div>
    </div>
  );
}
