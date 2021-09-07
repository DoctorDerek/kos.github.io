import { useState } from "react"

import NavFlyoutMenu from "@/components/PageLayout/NavFlyoutMenu"
import OutsideAlerter from "@/components/Utils/OutsideAlerter"
import NAVIGATION_MENU from "@/data/NAVIGATION_MENU"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function NavDropdownMenu() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  // <nav> is closed by default on mobile display

  const onToggleNav = () => {
    setNavIsOpen((status) => !status)
  }

  const closeNavIfOpen = () => {
    setNavIsOpen((status) => false)
  }

  /* Scroll to menu if clicked? (Alternative to full screen)

  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()
   // run this function from an event handler or an effect to execute scroll

  return (
      <>
        <div ref={myRef}>Element to scroll to</div>
        <button onClick={executeScroll}> Click to scroll </button>
      </>*/

  return (
    <>
      <OutsideAlerter closeNavIfOpen={closeNavIfOpen}>
        {/* OutsideAlerter is for the mobile menu --
        close with toggle or by clicking outside */}
        {/*as="nav"*/}
        <nav role="navigation" className="flex flex-col items-center mt-4 mb-6">
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => onToggleNav()}
            className="flex mx-auto text-2xl font-semibold sm:hidden"
          >
            <div className="w-8 h-8 text-black rounded fill-current">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                {/* menu icon when closed and X icon when open*/}
                {navIsOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </div>
            Menu
          </button>

          <div
            className={classNames(
              navIsOpen ? "flex" : "hidden sm:flex",
              "justify-around sm:max-w-lg flex-wrap px-4 mx-auto lg:max-w-full w-full sm:px-6 lg:px-8 group bg-white rounded-md text-base font-medium hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            {NAVIGATION_MENU.map(
              ([title, hrefOrSubmenu]: NAVIGATION_MENU_TYPE) => {
                return (
                  <NavFlyoutMenu
                    title={title as string}
                    hrefOrSubmenu={hrefOrSubmenu as NAVIGATION_MENU_TYPE}
                    layout="outer"
                    key={"FlyoutMenu" + title}
                    parent={"@/"}
                  />
                )
              }
            )}
          </div>
        </nav>
      </OutsideAlerter>
    </>
  )
}
