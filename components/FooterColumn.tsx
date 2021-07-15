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
      {officeAddress && (
        // translate-x-[-2rem] so that the text appears centered with the logo
        <div className="transform translate-x-[-2rem] md:translate-x-0">
          <IconCard {...officeAddress} location="footer" />
        </div>
      )}
    </div>
  )
}
