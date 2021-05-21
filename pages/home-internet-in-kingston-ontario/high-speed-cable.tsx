import { useState } from "react"
import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"
import PricingModal from "@/components/PricingModal"
import OrderNowButton from "@/components/OrderNowButton"

const classNames = (...classes: string[]) => classes.join(" ")

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
type PricingPackage = {
  name: string
  price: string
  download: string
  data: string
  description: string
}
function ResidentialHighSpeedCablePricing() {
  const pricingPackages: PricingPackage[] = [
    {
      name: "CABLE 15",
      price: "39",
      download: "15.0 MBPS",
      data: "200 GB",
      description:
        "Surf, shop, stream music and video, stay connected with family and friends.",
    },
    {
      name: "CABLE 40",
      price: "54",
      download: "40.0 MBPS",
      data: "300 GB",
      description:
        "For active families and multiple users. All the features with more speed and data.",
    },
    {
      name: "CABLE 60",
      price: "74",
      download: "60.0 MBPS",
      data: "300 GB",
      description:
        "For power users. Perfect for people who demand the most speed available.",
    },
  ]
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {pricingPackages.map((pricingPackage, index) => (
          <>
            <Pricing
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
function Pricing({
  color = "navy",
  pricingPackage,
  number,
}: {
  color?: "navy" | "teal"
  pricingPackage: PricingPackage
  number: number
}) {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div
      className={classNames(
        color === "teal"
          ? "hover:text-teal-brand hover:border-teal-brand"
          : "hover:text-blue-brand hover:border-blue-brand ",
        "relative flex flex-col h-full m-3 transition duration-500 shadow-2xl w-96 border-t-4 border-transparent border-solid text-white"
      )}
    >
      <div className="absolute z-20 text-6xl font-bold left-3 top-2">
        {number}
      </div>
      <div className="flex flex-col items-center justify-center h-48 bg-[#e8eff2]">
        <div
          className={classNames(
            color === "teal" ? "bg-teal-brand" : "bg-blue-brand",
            "border-[#e8eff2] absolute flex flex-col justify-center border-solid rounded-full shadow-xl top-8 w-92 h-92 border-20"
          )}
        >
          <div
            className={classNames(
              color === "teal"
                ? "bg-teal-brand border-teal-dark"
                : "bg-blue-brand border-blue-dark",
              "z-10 flex flex-col justify-center flex-shrink-0 mx-auto text-center text-white border-solid rounded-full top-4 w-84 h-84 border-20"
            )}
          >
            <span className="text-5xl font-bold">{pricingPackage.name}</span>
            <span className="mt-6">
              <span className="text-5xl font-bold">
                ${pricingPackage.price}
              </span>
              <sup className="text-xl">.95</sup>
            </span>
            <span className="mt-0 text-xl">
              per month{" "}
              <sup>
                <a href="#1" className="text-white underline">
                  1
                </a>{" "}
                <a href="#2" className="text-white underline">
                  2
                </a>
              </sup>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-10 mx-2 mt-56 space-y-6 text-center">
        <span className="text-2xl leading-6 text-blue-brand">
          UP TO {pricingPackage.download}
          <br />
          DOWNLOAD SPEED
        </span>
        <span className="text-2xl leading-6 text-blue-brand">
          {pricingPackage.data} OF DATA <br />
          TRANSFER PER MONTH
        </span>
        <h6 className="text-base text-gray-700">{pricingPackage.name}</h6>
        <p className="text-black">{pricingPackage.description}</p>
        <button
          className="text-sm font-bold text-teal-brand text-underline"
          onClick={() => setOpenModal((state) => !state)}
        >
          » click here for full details
        </button>
        <PricingModal openModal={openModal} setOpenModal={setOpenModal} />
        <HoverBox>
          <span className="text-[#901D3D] font-extrabold">
            MAKE IT UNLIMITED
          </span>
          <span className="text-sm font-bold leading-3 text-teal-brand">
            Add Unlimited Data for only
            <br />
            <span className="text-3xl">$10.00</span> per month{" "}
            <sup>
              <a href="#2" className="text-black underline">
                2
              </a>
            </sup>
          </span>
        </HoverBox>
        <OrderNowButton color="blue" />
      </div>
    </div>
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
function HoverBox({
  className = "",
  children,
}: {
  className?: string
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <div
      className={classNames(
        className,
        "transition duration-500 border border-gray-300 border-solid hover:shadow-md"
      )}
    >
      <div className="flex flex-col py-4 space-y-2 transition duration-500 border-t-4 border-transparent border-solid hover:shadow-sm hover:border-blue-brand">
        {children}
      </div>
    </div>
  )
}
