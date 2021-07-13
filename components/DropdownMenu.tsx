import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"

import FlyoutMenu from "@/components/FlyoutMenu"
import NAVIGATION_MENU from "@/data/NAVIGATION_MENU"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function DropdownMenu() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  // <nav> is closed by default on mobile display

  const onToggleNav = () => {
    setNavIsOpen((status) => !status)
  }

  const closeNavIfOpen = () => {
    setNavIsOpen((status) => false)
  }

  /*
  Scroll to menu if clicked? (Alternative to full screen)

  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()
   // run this function from an event handler or an effect to execute scroll

   return (
      <>
         <div ref={myRef}>Element to scroll to</div>
         <button onClick={executeScroll}> Click to scroll </button>
      </>
      */

  /**
   * Hook that alerts clicks outside of the passed ref
   */

  /**
   * Component that alerts if you click outside of it
   */
  function OutsideAlerter(props: any) {
    const wrapperRef = useRef<HTMLInputElement>(null)

    const handleClickOutside = (e: MouseEvent) => {
      if (!(wrapperRef.current! as any).contains(e.target)) {
        closeNavIfOpen()
      }
    }

    function useOutsideAlerter(ref: React.RefObject<HTMLInputElement>) {
      useEffect(() => {
        /**
         * Close mobile navigation menu if clicked on outside of element
         */

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [ref])
    }

    useOutsideAlerter(wrapperRef)

    return <div ref={wrapperRef}>{props.children}</div>
  }

  OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired,
  }

  // export default OutsideAlerter

  return (
    <>
      <OutsideAlerter>
        {/* OutsideAlerter is for the mobile menu --
        close with toggle or by clicking outside */}
        {/*as="nav"*/}
        <nav role="navigation" className="flex flex-col items-center">
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => onToggleNav()}
            className="flex mx-auto my-4 text-2xl sm:hidden"
          >
            <div className="w-8 h-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
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
              "justify-between sm:max-w-lg flex-wrap px-4 py-6 mx-auto lg:max-w-full w-full sm:px-6 lg:px-8 group bg-white rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            {NAVIGATION_MENU.map(
              ([title, hrefOrSubmenu]: NAVIGATION_MENU_TYPE) => {
                return (
                  <FlyoutMenu
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
