import Image from "next/image";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="relative z-10 lg:w-1/2 lg:max-w-2xl">
        <div className="relative px-6 py-16 sm:py-12 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div className="hidden text-center sm:mb-10 sm:flex">
              <div className="relative rounded-full px-6 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Follow us on Facebook to see our recent work.{" "}
                <Link
                  href="https://www.facebook.com/WEARETOPNOTCHELECTRIC"
                  target="_blank"
                  className="whitespace-nowrap font-semibold text-blue-900"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Top Notch Electric Facebook{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Top Notch Electric is a Christian based company serving the Idaho
              Panhandle and surrounding areas.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Top Notch Electric, we believe in getting your job done right
              the first time, every time.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We do this by doing work we enjoy and establishing a personal
              relationship with our customers.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/about"
                className="rounded-full border-2 border-primary px-4 py-2 text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[600px] overflow-hidden rounded-3xl bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          fill
          loading="eager"
          className="aspect-[3/2] w-full object-cover object-left lg:aspect-auto lg:h-full lg:w-full"
          src="/rich_and_doggies.png"
          alt="Rich and the dogs at the fair"
        />
      </div>
    </div>
  );
};
