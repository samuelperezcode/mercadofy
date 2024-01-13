import { cn } from "@/lib/utils"

interface WrapperProps {
  className?: string
  children: React.ReactNode
}

/* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */

export function Wrapper({ className, children }: WrapperProps) {
  return (
    <div className={cn(
      'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
      className
    )}>
      {children}
    </div>
  )
}
