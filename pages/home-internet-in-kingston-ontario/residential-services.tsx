import { InternalTemplate } from "@/components/InternalTemplate"

export default function ResidentialServices(): JSX.Element {
  const title =
    "Home Internet Service Provider in Kingston & Belleville, Ontario"
  // "Residential Services"
  const slug = "residential-services"
  // "residential"

  return (
    <InternalTemplate title={title} slug={slug}>
      <p>
        Kingston Online Services offers Internet for the home (or home office)
        at speeds starting from dial-up connectivity to high speed services
        intended for video and telephony.
      </p>
      <p>
        Kingston Online Services also provides innovative solutions for rural
        connectivity where conventional Internet services are not available.
      </p>
      <h2 className="text-2xl tracking-tight color">
        Please <a href="/contact.php">contact our office</a> for more
        information, or select from one of our services below.
      </h2>
    </InternalTemplate>
  )
}
