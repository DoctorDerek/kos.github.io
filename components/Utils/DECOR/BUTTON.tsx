import Link from "@/components/Utils/CustomLink"

export default function BUTTON({ href, text }: { href: string; text: string }) {
  return (
    <div className="flex items-center">
      <Link
        href={href}
        className="relative px-4 py-3 font-bold text-center text-white no-underline uppercase shadow-md select-none font-lato rounded-xl bg-red-button-dark bg-gradient-to-t from-red-button-light to-red-button-dark hover:bg-gradient-to-b"
      >
        {text}
      </Link>
    </div>
  )
}
