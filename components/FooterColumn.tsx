import Image from "@/components/CustomImage"
import Link from "@/components/CustomLink"
import IconCard from "@/components/IconCard"

export default function FooterColumn({
  officeAddress,
  logo,
}: {
  officeAddress?: IconCard
  logo?: boolean
}) {
  if (!officeAddress && !logo) return null

  return (
    <div className="px-1 sm:w-1/3">
      {logo && (
        <div className="logo">
          <Link href="/">
            <div className="grid w-[300px] h-[125px] mx-auto">
              <Image src="/images/logo-invert.png" alt="Logo" />
            </div>
          </Link>
        </div>
      )}
      {officeAddress && <IconCard {...officeAddress} location="footer" />}
    </div>
  )
}
