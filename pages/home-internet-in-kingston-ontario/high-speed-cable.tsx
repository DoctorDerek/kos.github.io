import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"
import { PricingPackageColumn } from "@/components/PricingPackageColumn"
import { HoverBox } from "@/components/HoverBox"

export default function ResidentialHighSpeedCable(): JSX.Element {
  const title = (
    <>
      Residential <span className="text-red-brand">High Speed Cable</span>{" "}
      Packages in Kingston & Belleville, Ontario
    </>
  )
  // "Residential High Speed Cable Packages"
  const slug = "home-internet-in-kingston-ontario/high-speed-cable"
  // "res/high-speed-cable"
  const bulletNavMenu = <BulletNavMenu type="Residential" />

  return (
    <InternalTemplate
      title={title}
      slug={slug}
      bulletNavMenu={bulletNavMenu}
      fullWidth={true}
      pricingSection={<ResidentialHighSpeedCablePricing />}
      detailsSection={<ResidentialHighSpeedCableDetails />}
    >
      <ResidentialHighSpeedCableContent />
    </InternalTemplate>
  )
}

function ResidentialHighSpeedCableContent() {
  return (
    <div className="flex flex-col space-y-6">
      <span className="text-xl text-left">
        Get an instant connection with Internet over cable at a price that suits
        your needs.
      </span>
      <div className="transition duration-500 border border-gray-300 border-solid hover:shadow-md">
        <div className="flex flex-col px-2 py-2 space-y-2 transition duration-500 border-t-4 border-transparent border-solid hover:border-blue-brand md:py-4">
          <form
            action="https://kos.net/dslavail/dslavail-check.php"
            method="post"
            name="dslcheck"
            className="flex"
          >
            <input type="hidden" name="minidslc" value="1" />
            <input type="hidden" name="docheck" value="1" />
            <div className="flex flex-col px-2 pt-1 pb-2 mx-auto space-y-1 text-center border border-black border-solid shadow">
              <label htmlFor="postalcode" className="text-lg">
                Enter your Postal Code to check for services available in your
                area:
              </label>
              <div className="space-x-2">
                <input
                  className="px-1 py-0 text-center"
                  type="text"
                  placeholder="K7K 5W7"
                  name="postalcode"
                  maxLength={7}
                  size={7}
                  id="postalcode"
                />
                <input
                  type="submit"
                  value="Check"
                  name="sub"
                  id="sub"
                  className="px-1 text-white border border-black border-solid shadow-sm from-blue-600 bg-gradient-to-b to-blue-800"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
function ResidentialHighSpeedCablePricing() {
  const pricingPackages: PricingPackage[] = [
    {
      name: "CABLE 15",
      price: "39",
      downloadSpeed: "15.0 MBPS",
      dataTransfer: "200 GB",
      description:
        "Surf, shop, stream music and video, stay connected with family and friends.",
    },
    {
      name: "CABLE 40",
      price: "54",
      downloadSpeed: "40.0 MBPS",
      dataTransfer: "300 GB",
      description:
        "For active families and multiple users. All the features with more speed and data.",
    },
    {
      name: "CABLE 60",
      price: "74",
      downloadSpeed: "60.0 MBPS",
      dataTransfer: "300 GB",
      description:
        "For power users. Perfect for people who demand the most speed available.",
    },
  ]
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {pricingPackages.map((pricingPackage, index) => (
          <>
            <PricingPackageColumn
              color={index % 2 === 1 ? "teal" : "navy"}
              pricingPackage={pricingPackage}
              key={pricingPackage.name}
              number={index + 1}
            />
            {index % 3 === 0 && index > 0 && (
              <div className="w-full h-0">{/*flex break*/}</div>
            )}
          </>
        ))}
      </div>
    </>
  )
}
function ResidentialHighSpeedCableDetails() {
  return (
    <>
      <div className="pt-12 text-center">
        <div id="1">1) Requires Modem rental or purchase.</div>
        <div id="2">
          2) For residential purposes only, must not exceed a reasonable amount
          of usage
        </div>
        <div id="3">
          3) $50 Setup Fee (Waived for existing Cable Internet Subscribers for
          service at their current location.)
        </div>
      </div>
      <div className="py-12 text-3xl font-bold text-center text-blue-brand">
        Additional Details & Options
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="text-left w-96">
          <HoverBox className="bg-gray-100">
            <div className="font-bold text-center text-blue-brand">OPTIONS</div>
            <ul className="ml-8 mr-2 list-disc">
              <li>Additional E-Mail boxes</li>
              <li>$4.95 per month, each Optional</li>
              <li>VIP E-mail boxes, $6.95 per month, each</li>
              <li>Additional 1000MB (1GB) transfer available for $1.00</li>
              <li>Opt-out for automatic spam protection</li>
            </ul>
          </HoverBox>
        </div>
        <div className="text-left w-96">
          <HoverBox>
            <div className="font-bold text-center text-blue-brand">
              MODEM OPTIONS
            </div>
            <p className="px-2">Automatic payment methods are required.</p>
            <ul className="ml-8 mr-2 list-disc">
              <li>Monthly Modem rental,</li>
              <li>$5.00 Buy Modem $79.95 (Hitron CDA-RES)</li>
              <li>Call for payment plan options</li>
            </ul>
            <p className="font-bold text-center text-blue-brand">
              BRING YOUR OWN MODEM
            </p>
            <p className="px-2">
              You are able to use your own Cable Modem if it is in our{" "}
              <a href="/modem/list" className="underline text-blue-brand">
                supported modem list
              </a>
              .
            </p>
          </HoverBox>
        </div>
        <div className="h-auto text-left w-96">
          <HoverBox className="bg-gray-100">
            <div className="font-bold text-center text-blue-brand">
              REQUIREMENTS
            </div>
            <p className="px-2">
              To access the Internet with KOS CABLE, you will need:
            </p>
            <ul className="ml-8 mr-2 list-disc">
              <li>Supported Cable Modem Required (Rental Available)</li>{" "}
              <li>
                Modern 32-bit or 64-bit Operating System (Windows 7 minimum)
              </li>
              <li>Minimum of 2.0Ghz processor required</li>
              <li>56K modem suggested for dial-up</li>
            </ul>
          </HoverBox>
        </div>
      </div>
    </>
  )
}
