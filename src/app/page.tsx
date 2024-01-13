import { Button, buttonVariants } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import Link from "next/link";
import { CheckCircle, CircleDollarSign, PackageCheck, } from 'lucide-react'

const perks = [
  {
    label: 'Instant Delivery',
    Icon:  PackageCheck,
    description: 'Get your products delivered instantly to your doorsteps.'
  },
  {
    label: 'Garanteed Quality',
    Icon:  CheckCircle,
    description: 'Every product in our marketplace is carefully selected by our team to ensure the best quality.'
  },
  {
    label: 'Free Returns',
    Icon:  CircleDollarSign,
    description: 'We offer free returns for up to 30 days after purchase.'
  },

]

export default function Home() {
  return (
    <>
      <Wrapper >
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
      <Wrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {
              perks.map(({ label, Icon, description }) => (
                <article
                  key={label}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="flex justify-center md:flex-shrink-0">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                      <Icon className="w-1/3 h-1/3"/>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-0 lg:ml-6">
                    <h3 className="text-base text-gray-900 font-medium">{label}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{description}</p>
                  </div>
                </article>
              ))
            }
          </div>
      </Wrapper>
    </>

  )
}
