import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-lavender-500 to-sky-500 text-white hover:from-lavender-600 hover:to-sky-600 shadow-lg hover:shadow-lavender-200/50 dark:from-violet-600 dark:to-cyan-600 dark:hover:from-violet-700 dark:hover:to-cyan-700 dark:hover:shadow-violet-500/30",
        destructive: "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 dark:from-red-600 dark:to-rose-600",
        outline: "border-2 border-gradient-to-r from-lavender-300 to-sky-300 bg-transparent hover:bg-gradient-to-r hover:from-lavender-50 hover:to-sky-50 text-lavender-600 dark:border-violet-500 dark:text-violet-400 dark:hover:bg-gradient-to-r dark:hover:from-violet-950 dark:hover:to-cyan-950",
        secondary: "bg-gradient-to-r from-mint-100 to-teal-100 text-teal-700 hover:from-mint-200 hover:to-teal-200 dark:from-emerald-900 dark:to-teal-900 dark:text-emerald-300 dark:hover:from-emerald-800 dark:hover:to-teal-800",
        ghost: "hover:bg-gradient-to-r hover:from-lavender-50 hover:to-sky-50 hover:text-lavender-600 dark:hover:from-violet-950 dark:hover:to-cyan-950 dark:hover:text-violet-300",
        link: "text-lavender-600 underline-offset-4 hover:underline dark:text-violet-400",
        glass: "glass glass-dark text-white hover:bg-white/30 dark:hover:bg-slate-700/40",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-xl px-4",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }