import Link from "next/link";
import { Wrapper } from "./wrapper";
import { Icons } from "./icons";

export function Navbar() {
  return (
    <header className="bg-white sticky z-50 w-full top-0 h-16">
      <div className="relative bg-white">
        <Wrapper className="border-b border-gray-200 ">
          <nav className=" flex h-16 items-center">
            {/* Mobile nav */}

            <div className="ml-4 flex lg:ml-0">
              <Link href={'/'}>
                <Icons.logo className="w-10 h-10" />
              </Link>
            </div>
          </nav>
        </Wrapper>
      </div>
    </header>
  )
}
