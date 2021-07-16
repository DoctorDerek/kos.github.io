import Link from "@/components/Utils/CustomLink"

export default function BUTTON({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
    >
      {text}
    </Link>
  )
}
