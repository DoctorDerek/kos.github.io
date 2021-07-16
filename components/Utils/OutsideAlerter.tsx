import { useEffect, useRef } from "react"

/**
 * OutsideAlerter: Component that alerts if you click outside of it
 */
export default function OutsideAlerter({
  closeNavIfOpen,
  children,
}: {
  closeNavIfOpen: () => void
  children: React.ReactNode
}) {
  const wrapperRef = useRef<HTMLInputElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (!(wrapperRef.current! as any).contains(e.target)) {
      closeNavIfOpen()
    }
  }

  /**
   * React Hook that alerts clicks outside of the passed ref
   */
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

  return <div ref={wrapperRef}>{children}</div>
}
