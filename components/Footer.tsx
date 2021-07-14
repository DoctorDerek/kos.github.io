import Script from "next/script"

import Image from "@/components/CustomImage"
import Link from "@/components/CustomLink"
import IconCard from "@/components/IconCard"
import FacebookIcon from "@/data/material-icons/facebook.svg"
import HERO_ICONS from "@/lib/HERO_ICONS"

export default function Footer() {
  const officeAddressLeft: IconCard = {
    icon: "location-marker",
    label: ["The LaSalle", "303 Bagot St., 16A", "Kingston ON K7K 5W"],
    text: "613-549-8667",
  }

  const officeAddressRight: IconCard = {
    icon: "location-marker",
    label: ["183 Front Street", "(near City Hall)", "Belleville, ON K8N 2Y9"],
    text: "613-968-7137",
  }

  return (
    <footer>
      <div className="page-footer w-full h-[450px]">
        <div className="grid w-full h-[450px]">
          <Image src="/images/footer-bg.jpg" alt="ocean" />
        </div>
        <div className="back-to-top hidden-xs">
          <Link href="#top">
            <span className="flex-wrap icon icon-up-arrow" />
          </Link>
        </div>
        <div className="container absolute transform-gpu left-1/2 translate-x-[-50%] translate-y-[-400px]">
          <div className="flex flex-wrap footer-row">
            <FooterColumn
              officeAddress={officeAddressLeft}
              phone="613-549-8667"
            />
            <div className="pl-4 pr-4 sm:w-1/3">
              <FooterColumn logo={true} />
            </div>
            <FooterColumn
              officeAddress={officeAddressRight}
              phone="613-968-7137"
            />
          </div>
          <div className="footer-bot">
            <div className="text-base">
              <div id="plemx-root">
                <Script src="/js/theWeatherNetwork.js" />
              </div>
              <Link
                href="https://www.theweathernetwork.com"
                className="text-gray-900"
              >
                The Weather Network
              </Link>
            </div>
            <div className="copyright">
              Copyright © KOS - {new Date().getFullYear()} {" | "}
              <Link className="text-white" href="/policies/">
                KOS Policies
              </Link>
              {" | "}
              <Link className="text-white" href="/tac/">
                Terms and Conditions
              </Link>
              {" | "}
              <Link className="text-white" href="/e911">
                e911
              </Link>
              {" | "}
              <Link className="text-white" href="/wst/">
                Personal Web Space TAC
              </Link>
              <br />
              <div>
                <span className="text-white">
                  <strong>Serving Eastern Ontario: </strong>
                </span>
                <Link
                  className="text-white"
                  href="/kingston-internet-services/"
                >
                  Kingston
                </Link>
                {" | "}
                <Link
                  className="text-white"
                  href="/gananoque-internet-services/"
                >
                  Gananoque
                </Link>
                {" | "}
                <Link className="text-white" href="/picton-internet-services/">
                  Picton
                </Link>
                {" | "}
                <Link
                  className="text-white"
                  href="/brighton-internet-services/"
                >
                  Brighton
                </Link>
                {" | "}
                <Link className="text-white" href="/trenton-internet-services/">
                  Trenton
                </Link>
                {" | "}
                <Link
                  className="text-white"
                  href="/belleville-internet-services/"
                >
                  Belleville
                </Link>
                {" | "}
                <Link className="text-white" href="/napanee-internet-services/">
                  Napanee
                </Link>
              </div>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <Link href="https://www.facebook.com/Kingston-Online-Services-120301901358202/">
                    <div className="grid self-center w-12 h-12 p-2 text-white border-4 border-white border-solid rounded-full fill-current">
                      <FacebookIcon />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <canvas id="footerSea" />
      </div>
    </footer>
  )
}

function FooterColumn({
  officeAddress,
  phone,
  logo,
}: {
  officeAddress?: IconCard
  phone?: string
  logo?: boolean
}) {
  if (!(officeAddress && phone) && !logo) return null

  return (
    <div className="pl-4 pr-4 sm:w-1/3">
      {logo && (
        <div className="logo">
          <Link href="/">
            <div className="grid w-[300px] h-[125px] mx-auto">
              <Image src="/images/logo-invert.png" alt="Logo" />
            </div>
          </Link>
        </div>
      )}
      {officeAddress && phone && (
        <IconCard {...officeAddress} location="footer" />
      )}
    </div>
  )
}
