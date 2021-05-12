/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid"
import Link from "@/components/Link"
import { useRouter } from "next/router"

// lookup RegExp objects to match subpages from current URL href (router.asPath)
const MENU_LOOKUP_ALIASES = new Map([
  ["Services", [/home/, /business/, /camp/, /avail/, /pay/]],
  ["Residential", [/home/]],
  ["Business", [/business/]],
  ["Hosting", [/hosting/, /domain/]],
  ["About Us", [/about/, /news/, /coverage/]],
  ["My Account", [/support/]],
])

const partOfCurrentPagePath = (
  title: string,
  hrefOrSubmenu: NAVIGATION_MENU_TYPE | string,
  currentPath: string
) => {
  if (typeof hrefOrSubmenu === "string") {
    let href = hrefOrSubmenu as string
    console.log(title, href, currentPath)
    // Remove trailing slashes if present so /order/ matches /order
    currentPath =
      currentPath.slice(-1) === "/" ? currentPath.slice(0, -1) : currentPath
    href = href.slice(-1) === "/" ? href.slice(0, -1) : href
    if (href === currentPath) return true
    // This also tests for the homepage / (index.js) because ""===""
  }

  if (typeof hrefOrSubmenu === "object") {
    console.log(title, currentPath)
    // Test to see if the menu structure contains the current path
    // e.g. /home-internet-in-kingston-ontario/residential-services
    const arrayOfRegExp = MENU_LOOKUP_ALIASES.get(title)
    if (arrayOfRegExp)
      console.log(arrayOfRegExp.some((regExp) => regExp.test(currentPath)))
    if (arrayOfRegExp)
      return arrayOfRegExp.some((regExp) => regExp.test(currentPath))
  }

  return false // not a match
}

const useCurrentPath = () => {
  // fetch current page URL
  const router = useRouter() // next/router
  const currentPagePath = router.asPath

  return currentPagePath
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function FlyoutMenu({
  title,
  hrefOrSubmenu,
  layout,
}: {
  title: string
  hrefOrSubmenu: NAVIGATION_MENU_TYPE | string
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

  const LINK_STYLES = classNames(
    "py-5 px-1 text-base text-gray-900 uppercase transition duration-150 ease-in-out hover:text-blue-800 w-full font-bold"
  )

  const currentPagePath = useCurrentPath()

  return (
    <>
      {typeof hrefOrSubmenu === "string" && (
        <Popover className="relative">
          <Link
            key={title + hrefOrSubmenu}
            href={hrefOrSubmenu}
            className={classNames(
              partOfCurrentPagePath(title, hrefOrSubmenu, currentPagePath)
                ? "text-blue-800"
                : "text-gray-800",
              "bg-white rounded-md inline-flex items-center",
              LINK_STYLES
            )}
          >
            {title}
          </Link>
        </Popover>
      )}
      {typeof hrefOrSubmenu === "object" && (
        <Popover className="relative">
          {({ open }) => (
            <div
              onMouseEnter={() => useHover && onMouseHover(!open)}
              onMouseLeave={() => useHover && onMouseHover(open)}
            >
              <Popover.Button
                className={classNames(
                  open ||
                    partOfCurrentPagePath(title, hrefOrSubmenu, currentPagePath)
                    ? "text-blue-800"
                    : "text-gray-800",
                  "bg-white rounded-md inline-flex items-center",
                  LINK_STYLES
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
                        "relative grid space-y-[2px] bg-white border-2 border-gray-300 border-solid divide-y-2 rounded-md") as string
                    )}
                  >
                    {typeof hrefOrSubmenu === "object" &&
                      (hrefOrSubmenu as NAVIGATION_MENU_TYPE[]).map(
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
                                  className={classNames(
                                    partOfCurrentPagePath(
                                      title as string,
                                      href,
                                      currentPagePath
                                    )
                                      ? "text-blue-800"
                                      : "text-gray-800",
                                    LINK_STYLES
                                  )}
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
      )}
    </>
  )
}
