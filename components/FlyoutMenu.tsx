/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "@/components/Link"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function FlyoutMenu({
  title,
  hrefOrSubmenu,
}: {
  title: string
  hrefOrSubmenu: NAVIGATION_MENU_TYPE
}) {
  const timeoutDuration = 200
  let timeout: NodeJS.Timeout
  const useHover = true
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const openMenu = () => buttonRef?.current?.click()
  const closeMenu = () =>
    dropdownRef?.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    )
  const onMouseEnter = (closed: boolean) => {
    clearTimeout(timeout)
    closed && openMenu()
  }
  const onMouseLeave = (open: boolean) => {
    open && (timeout = setTimeout(() => closeMenu(), timeoutDuration))
  }

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-800"
            )}
            ref={buttonRef}
            onMouseEnter={() => useHover && onMouseEnter(!open)}
            onMouseLeave={() => useHover && onMouseLeave(open)}
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
              className="absolute left-[-1.75rem] z-10 w-64 px-2 mt-2"
              ref={dropdownRef}
            >
              <div className="relative grid space-y-[2px] bg-white border-gray-300 border-solid divide-y-2 rounded-md">
                {typeof hrefOrSubmenu === "string" && (
                  <Link
                    key={title + hrefOrSubmenu}
                    href={hrefOrSubmenu}
                    className="block transition duration-150 ease-in-out hover:bg-gray-50"
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
                            className="block transition duration-150 ease-in-out hover:bg-gray-50"
                          >
                            {title}
                          </Link>
                        )}
                        {submenu && (
                          <Popover.Group>
                            <FlyoutMenu
                              title={title as string}
                              hrefOrSubmenu={submenu}
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
        </>
      )}
    </Popover>
  )
}
