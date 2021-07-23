import { classNames } from "@/lib/utils"

export default function SectionWrapper({
  useMaxWidth,
  children,
}: {
  useMaxWidth?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      className={classNames(
        "px-6 py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10 md:px-8 lg:px-10",
        useMaxWidth ? "max-w-7xl" : ""
      )}
    >
      {children}
    </section>
  )
}
