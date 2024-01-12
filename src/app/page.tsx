import { Button, buttonVariants } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="flex flex-col mx-auto py-20 text-center items-center max-w-3xl gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high quality {' '}
          <span className="text-primary">products</span>
        </h1>
        <p className="text-lg max-w-prose text-muted-foreground">
          Welcome to Mercadofy. Every product in our marketplace is carefully selected by our team to ensure the best quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={'/products'} className={buttonVariants()}>
            Browse Products
          </Link>
          <Button variant={'outline'}>
            Our quality promise &rarr;
          </Button>
        </div>
        
      </div>
    </Wrapper>

  )
}
