import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="absolute top-0 -z-10 h-screen w-screen bg-primary bg-opacity-50">
          <div className="absolute top-0 h-screen w-screen blur-md">
            <Image
              alt="Sandpoint Idaho"
              src="/sandpoint.jpg"
              fill
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="z-100 relative mx-auto max-w-7xl space-y-12 px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-7xl font-black leading-8 text-white underline underline-offset-8 drop-shadow-lg">
            404
          </p>
          <h1 className="mt-4 flex items-center text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
            Sorry, we could not find the page you were looking for...
          </h1>
          <div className="flex justify-center">
            <FaceFrownIcon className="ml-2 h-20 w-20 text-center text-white" />
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="font-semibold leading-7 text-white">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
