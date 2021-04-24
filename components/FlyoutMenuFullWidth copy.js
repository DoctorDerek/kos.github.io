/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline"

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "View All Products", href: "#", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function FlyoutMenuFullWidth({ title, menuItems }) {
  return (
    <Popover className="relative z-0">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow">
            <div className="flex px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <span>{title}</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute left-0 z-10 transform shadow-lg"
            >
              <div className="bg-white">
                <div className="grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex flex-col justify-between p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex md:h-full lg:flex-col">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                            <item.icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                          <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                            Learn more <span aria-hidden="true">&rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50">
                <div className="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                  {callsToAction.map((item) => (
                    <div key={item.name} className="flow-root">
                      <a
                        href={item.href}
                        className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                      >
                        <item.icon
                          className="flex-shrink-0 w-6 h-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
