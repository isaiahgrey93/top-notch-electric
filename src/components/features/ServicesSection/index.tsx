import {
  BuildingOfficeIcon,
  HomeModernIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    name: "Residential",
    description:
      "Install and repair home lighting, outlets, and circuit breakers to ensure a safe and efficient electrical system.",
    href: "/services#residential",
    more: "Full Residential Services",
    icon: HomeModernIcon,
  },
  {
    name: "Commerical",
    description:
      "Design and maintain electrical systems for office buildings, retail spaces, and factories, enhancing operational efficiency.",
    href: "/services#commerical",
    more: "Full Commerical Services",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Network Cabling",
    description:
      "Set up and optimize ethernet and fiber-optic cable networks to ensure seamless connectivity for businesses and homes.",
    href: "/services#network-cabling",
    more: "Full Network Cabling Services",
    icon: WifiIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Services
          </h2>
          <p className="mx-auto mt-6 max-w-sm text-center text-lg leading-8 text-gray-600">
            For over 25 years, we have been getting the job done right the first
            time every time.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-3xl border-2 p-6"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-blue-900"
                    >
                      {feature.more} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
