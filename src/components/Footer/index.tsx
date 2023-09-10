import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import type { JSX, SVGProps, RefAttributes } from "react";

type ContactIconProps = JSX.IntrinsicAttributes &
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>;

type SocialIconProps = JSX.IntrinsicAttributes &
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>;

const navigation = {
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  contact: [
    {
      name: "208-290-2336",
      href: "tel:208-290-2336",
      icon: (props: ContactIconProps) => <PhoneIcon {...props} />,
    },
    {
      name: "info@topnotchelectric.com",
      href: "mailto:info@topnotchelectric.com",
      icon: (props: ContactIconProps) => <EnvelopeIcon {...props} />,
    },
    {
      name: "855 Wood View Rd, Sandpoint, ID 83864",
      icon: (props: ContactIconProps) => <MapPinIcon {...props} />,
    },
  ],
  licenses: [
    {
      type: "Electrical Contractor License",
      detail: "#043707 (exp. 09/30/21)",
    },
    { type: "Electrical Master License", detail: "#043732 (exp. 08/31/23)" },
    {
      type: "Electrical Journeyman License",
      detail: "#043734 (exp. 03/31/23)",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/WEARETOPNOTCHELECTRIC",
      icon: (props: SocialIconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="relative aspect-[3.09/1] h-20">
              <Image
                fill
                className="relative right-5"
                src="/logo_name.png"
                alt="Company Logo"
              />
            </div>
            <div className="grid gap-2">
              <p className="text-sm leading-6 text-gray-300">
                Top Notch Electric, a Christian company, is an electrical
                contractor serving the Panhandle and surrounding areas.
              </p>
              <p className="text-sm leading-6 text-gray-300">
                Get the job done right, the first time, every time!
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-x-2 text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                          {item.name}
                        </a>
                      ) : (
                        <span className="gap-x-2x flex items-center gap-x-2 text-sm leading-6 text-gray-300">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white">
                  License & Certifications
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.licenses.map((item) => (
                    <li key={item.type}>
                      <div className="text-sm leading-6 text-gray-300">
                        {item.type}
                      </div>
                      <div className="text-sm leading-6 text-gray-300">
                        {item.detail}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2023 Top Notch Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
