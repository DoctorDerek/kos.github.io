import Link from "@/components/Utils/CustomLink"

export default function BUTTON({ href, text }: { href: string; text: string }) {
  return (
    <div className="flex items-center">
      <Link
        href={href}
        className="relative px-4 py-3 font-bold text-center text-white no-underline uppercase shadow-md select-none font-lato rounded-xl bg-red-button-dark bg-gradient-to-t from-red-button-light to-red-button-dark"
      >
        {text}
        <div
          className="absolute w-full h-full translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 rounded-xl opacity-100 hover:opacity-0 transition-opacity duration-500 flex items-center justify-center bg-gradient-to-b from-red-button-light to-red-button-dark"
          aria-hidden="true"
        >
          {/* second <div> is necessary for duration-500 hover effect as the */}
          {/* browser can easily transition opacity but not the bg-gradient */}
          {text}
        </div>
      </Link>
    </div>
  )
}
