import Script from "next/script"

import Image from "@/components/CustomImage"
import Link from "@/components/CustomLink"
import FooterColumn from "@/components/FooterColumn"
import FacebookIcon from "@/data/material-icons/facebook.svg"

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

  /* page-footer {
  @apply relative clear-both text-white;
  padding: 0 0 54px;
}

.page-footer .container {
  @apply relative;
  z-index: 100;
}

.page-footer .logo {
  @apply text-center;
}

.page-footer .logo img {
  @apply inline-block max-w-full;
}

.page-footer .location {
  @apply relative text-base leading-5 text-left text-white uppercase;
  margin: 32px 0 0 0;
  padding: 0 0 0 38px;
}

.page-footer .location span {
  @apply inline-block align-bottom;
}

.page-footer .location .icon {
  @apply absolute top-0 text-2xl align-middle;
  left: 2px;
  padding: 0 7px 0 0;
}

.page-footer .first-mobile {
  @apply float-right;
}

.page-footer .footer-bot {
  @apply text-center;
}

.page-footer .copyright {
  @apply text-base leading-5;
  margin: 18px 0 20px;
}

@media (max-width: 767px) {
  .page-footer {
    padding: 30px 10px;
  }
  .page-footer .location {
    @apply text-base leading-5;
    margin: 0 0 10px;
    padding: 0 0 0 38px;
  }
  .page-footer .first-mobile {
    @apply float-none;
  }
}

.back-to-top {
  @apply absolute;
  bottom: 205px;
  right: 5%;
}

@media (max-width: 1199px) {
  .back-to-top {
    bottom: 50px;
  }
}

.back-to-top a {
  @apply block text-6xl text-center text-white no-underline;
  line-height: 60px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.back-to-top:hover a {
  @apply text-blue-brand;
}

#footerSea {
  @apply absolute bottom-0 z-0 w-full pointer-events-none;
  opacity: 0.55;
}

#sea {
  @apply absolute bottom-0 w-full pointer-events-none;
  z-index: 1000;
  opacity: 0.15;
} */
  return (
    <footer>
      <div className="w-full h-full">
        <div className="grid w-full h-full">
          <Image src="/images/footer-bg.jpg" alt="ocean" />
        </div>
        <div className="back-to-top hidden-xs">
          <Link href="#top">
            <span className="flex-wrap icon icon-up-arrow" />
          </Link>
        </div>
        <div className="container absolute transform-gpu left-1/2 translate-x-[-50%] translate-y-[-400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <FooterColumn officeAddress={officeAddressLeft} />
            <FooterColumn logo={true} />
            <FooterColumn officeAddress={officeAddressRight} />
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
