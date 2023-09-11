import Image from "next/image";

export default function MainHero() {
  return (
    <div className="w-full">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gray-900">
        <Image
          src="/flag.jpg"
          alt="Sandpoint, Idaho"
          fill
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30 transition-opacity duration-1000 hover:opacity-40"
        />
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] animate-gradient-wave bg-gradient-to-tl from-red-600 to-blue-900 opacity-80"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h4 className="mt-6 text-xl leading-8 text-gray-100">
              The Panhandle&apos;s #1 Licensed Electrician
            </h4>
            <h3 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              You can trust us.
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get the job done right the first time every time.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="hover:bg-opacity-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get An Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
