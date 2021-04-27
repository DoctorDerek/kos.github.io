import { useState, Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { usePopper } from "react-popper"

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

export default function FlyoutMenuInner() {
  const [referenceElement, setReferenceElement] = useState()
  const [popperElement, setPopperElement] = useState()
  const { attributes } = usePopper(referenceElement, popperElement)

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full h-full p-5"
            )}
            ref={setReferenceElement}
          >
            <span className="uppercase">Solutions</span>
            <ChevronRightIcon
              className={classNames(
                open ? "text-gray-600 translate-x-4" : "text-gray-400",
                "ml-2 h-5 w-5 transform transition-all group-hover:text-gray-500"
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
              className="absolute top-0 z-10 w-64 left-40"
              ref={setPopperElement}
              {...attributes.popper}
            >
              <div className="relative grid space-y-[2.5px] top-[-4px] border-2 border-solid bg-white border-gray-300 divide-y-2 rounded-md">
                {solutions.map((item) => (
                  <a
                    key={item.name + item.href}
                    href={item.href}
                    className="p-5 text-base font-medium text-gray-900 uppercase transition duration-150 ease-in-out hover:text-blue-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
