import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl z-10">
            QR Tag for your pet
          </h1>

          <Separator className="bg-orange-500" />

          <div className="flex flex-col space-y-4 py-4">
            <p>
              Replace your metal tag with limited information with our QR code,
              which everyone can scan with their mobile phones
            </p>
            <p>Put as much information as you need!</p>
          </div>

          <div className="flex space-x-4">
            <button className="border border-black px-4 py-3 shadow-[0px_2px_0px_0px] shadow-black rounded-full">
              Learn more
            </button>
            <Link href="/login">
              <button className="border border-orange-500 px-4 py-3 shadow-[0px_2px_0px_0px] shadow-orange-700 bg-orange-500 text-white rounded-full">
                Get started
              </button>
            </Link>
          </div>
        </div>
        <Image
          className=""
          src="/main-illustration.png"
          alt="Pet-TAG"
          width={430}
          height={430}
          priority
        />
      </div>
      <Image
        src="/qr-code.svg"
        alt="QR code scanner"
        width={200}
        height={200}
      />
    </main>
  );
}
