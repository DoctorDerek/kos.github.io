/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import FlyoutMenuInner from "@/components/FlyoutMenuInner"

const solutions = [
  {
    name: "Blog",
    description: "Learn about tips, product updates and company culture.",
    href: "#",
  },
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "Check out webinars with experts and learn about our annual conference.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function FlyoutMenuInnerStacked({ title, href }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-800"
            )}
          >
            <span className="uppercase">{title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600 translate-y-1.5" : "text-gray-400",
                "ml-2 h-5 w-5 transform transition-all"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute left-[-1.75rem] top-4 z-10 w-64 px-2 mt-3 transform"
            >
              <div className="relative grid bg-white border-gray-300 border-solid divide-y-2 rounded-md">
                {solutions.map((item) => (
                  <Popover.Group
                    key={item.name}
                    href={item.href}
                    className="block transition duration-150 ease-in-out hover:bg-gray-50"
                  >
                    <FlyoutMenuInner />
                  </Popover.Group>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
