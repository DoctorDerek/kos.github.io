import HoverBullet from "@/components/HoverBullet"
import { useCurrentPath } from "@/lib/utils"

export default function LeftColumnMenu({
  leftColumnMenuTitle,
  leftColumnMenuLinks,
  children,
}: {
  leftColumnMenuTitle?: string
  leftColumnMenuLinks?: { title: string; href: string }[]
  children: any
}) {
  const currentPagePath = useCurrentPath() // used to indicate current page

  // {children} here is the <TitleHeadingsAndChildren> component
  // passed in from PageLayout; if we are not actually using
  // the <LeftColumnMenu> then we should just return the {children}
  const validLeftColumnMenu =
    leftColumnMenuTitle &&
    leftColumnMenuLinks &&
    Array.isArray(leftColumnMenuLinks) &&
    leftColumnMenuLinks.length > 0
  if (!validLeftColumnMenu) return <>{children}</> // return JSX

  // If we are actually using the left column menu, let's build it
  return (
    <div className="px-6 mx-auto md:px-8 lg:px-10">
      <div className="grid max-w-5xl grid-cols-1 mx-auto space-x-4 md:grid-cols-4">
        <div className="col-span-1">
          {/* Left side: all news & event posts as <HoverBullet> links */}
          <div className="pl-4 mb-6 text-xl font-semibold text-gray-700 uppercase border-l-2 border-solid border-blue-light">
            {leftColumnMenuTitle}
          </div>
          <div className="mb-8 border-gray-400 border-solid divide-y-1">
            {leftColumnMenuLinks &&
              leftColumnMenuLinks.map(
                ({ title, href }: { title: string; href: string }) => {
                  return (
                    <div key={title} className="py-3">
                      <HoverBullet
                        text={title}
                        href={href}
                        isCurrentPage={currentPagePath === href}
                      />
                    </div>
                  )
                }
              )}
          </div>
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  )
}
