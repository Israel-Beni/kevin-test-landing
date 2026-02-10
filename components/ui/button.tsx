import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "h-9.5 inline-flex items-center justify-center whitespace-nowrap rounded-xl gap-1.5 px-2.5 py-2 border-[1.3px] border-white shadow-[0px_0.65px_1.3px_0px_#1018280F,0px_0.65px_1.95px_0px_#1018281A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        light:
          "bg-[#F4F9FF] text-black hover:bg-black hover:text-white",
        dark:
          "bg-black text-white hover:bg-[#F4F9FF] hover:text-black",
      }
    },
    defaultVariants: {
      variant: "light",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
