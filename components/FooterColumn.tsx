import Link from "@/components/CustomLink"
import DynamicImage from "@/components/DynamicImage"
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
    <div className="flex justify-center col-span-1 px-1">
      {logo && (
        <Link
          href="/"
          className="flex items-center flex-shrink-0 w-full h-full mx-auto"
        >
          <DynamicImage
            src="/images/logo-invert.png"
            width="300px"
            height="125px"
            alt="Logo for KOS Internet Service Provider in Kingston, ON"
            fullWidth={true}
          />
        </Link>
      )}
      {officeAddress && <IconCard {...officeAddress} location="footer" />}
    </div>
  )
}
