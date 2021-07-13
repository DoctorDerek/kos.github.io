import { useEffect } from "react"

import Image from "@/components/CustomImage"
import Link from "@/components/CustomLink"
import FacebookIcon from "@/data/material-icons/facebook.svg"

const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export default function Footer() {
  useScript("/js/theWeatherNetwork.js")
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
            <div className="pl-4 pr-4 sm:w-1/3">
              <div className="location">
                <i className="icon icon-location" />
                The LaSalle Mews
                <br />
                303 Bagot Street, 16A
                <br />
                Kingston, ON K7K 5W7
                <br />
                <br />
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "bolder",
                    color: "#c70000",
                  }}
                >
                  613-549-8667
                </span>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3">
              <div className="logo">
                <Link href="/">
                  <div className="grid w-[300px] h-[125px] mx-auto">
                    <Image src="/images/logo-invert.png" alt="Logo" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3">
              <div className="location">
                <i className="icon icon-location" />
                183 Front Street
                <br />
                (near City Hall)
                <br />
                Belleville, ON K8N 2Y9 <br />
                <br />
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "bolder",
                    color: "#c70000",
                  }}
                >
                  613-968-7137
                </span>
              </div>
            </div>{" "}
          </div>
          <div className="footer-bot">
            <div className="text-base">
              <div id="plemx-root" />
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
