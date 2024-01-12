import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col mx-auto py-20 text-center items-center max-w-3xl">
        <h1 className="text-3xl text-red-500">Mercadofy</h1>
        <Button>
          Add
        </Button>
      </div>
    </Wrapper>

  )
}
