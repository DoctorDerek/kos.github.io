/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid"
import Link from "@/components/Link"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function FlyoutMenu({
  title,
  hrefOrSubmenu,
  layout,
}: {
  title: string
  hrefOrSubmenu: NAVIGATION_MENU_TYPE
  layout: "outer" | "inner"
}) {
  const timeoutDuration = 200
  let timeout: NodeJS.Timeout
  const useHover = true
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleMenu = () => buttonRef?.current?.click()
  /*let closeMenu = () =>
    dropdownRef?.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    )*/
  const onMouseHover = (open: boolean) => {
    clearTimeout(timeout)
    open && (timeout = setTimeout(() => toggleMenu(), timeoutDuration))
  }

  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => useHover && onMouseHover(!open)}
          onMouseLeave={() => useHover && onMouseHover(open)}
        >
          <Popover.Button
            className={classNames(
              open ? "text-blue-800" : "text-gray-800",
              "bg-white rounded-md inline-flex items-center p-5 text-base font-medium uppercase transition duration-150 ease-in-out hover:text-blue-800 w-full"
            )}
            ref={buttonRef}
          >
            <span className="uppercase">{title}</span>
            {layout === "outer" && (
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600 translate-y-1.5" : "text-gray-400",
                  "ml-2 h-5 w-5 transform transition-all"
                )}
                aria-hidden="true"
              />
            )}
            {layout === "inner" && (
              <ChevronRightIcon
                className={classNames(
                  open ? "text-gray-600 translate-x-4" : "text-gray-400",
                  "ml-2 h-5 w-5 transform transition-all group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            )}
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
              className={classNames(
                (layout === "inner" &&
                  "absolute top-0 z-10 w-64 left-44") as string,
                (layout === "outer" &&
                  "absolute left-[-1.75rem] z-10 w-64 px-2 mt-2") as string
              )}
              ref={dropdownRef}
            >
              <div
                className={classNames(
                  (layout === "inner" &&
                    "relative grid space-y-[2.5px] top-[-4px] border-2 border-solid bg-white border-blue-800 divide-y-2 rounded-md") as string,
                  (layout === "outer" &&
                    "relative grid space-y-[2px] bg-white border-gray-300 border-solid divide-y-2 rounded-md") as string
                )}
              >
                {typeof hrefOrSubmenu === "string" && (
                  <Link
                    key={title + hrefOrSubmenu}
                    href={hrefOrSubmenu}
                    className="p-5 text-base font-medium text-gray-900 uppercase transition duration-150 ease-in-out hover:text-blue-800"
                  >
                    {title}
                  </Link>
                )}
                {/*<FlyoutMenuFullWidth title={title} menuItems={services} />*/}
                {(hrefOrSubmenu as NAVIGATION_MENU_TYPE[]).map(
                  ([title, hrefOrSubmenu]: NAVIGATION_MENU_TYPE) => {
                    const href =
                      typeof hrefOrSubmenu === "string"
                        ? hrefOrSubmenu
                        : undefined
                    const submenu =
                      typeof hrefOrSubmenu === "object"
                        ? hrefOrSubmenu
                        : undefined
                    return (
                      <>
                        {href && (
                          <Link
                            key={title + href}
                            href={href}
                            className="p-5 text-base font-medium text-gray-900 uppercase transition duration-150 ease-in-out hover:text-blue-800"
                          >
                            {title}
                          </Link>
                        )}
                        {submenu && (
                          <Popover.Group>
                            <FlyoutMenu
                              title={title as string}
                              hrefOrSubmenu={submenu}
                              layout="inner"
                            />
                          </Popover.Group>
                        )}
                      </>
                    )
                  }
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}
