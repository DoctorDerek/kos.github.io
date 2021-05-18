import Image from "@/components/CustomImage"
import { useEffect } from "react"
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
          <a href="#top">
            <span className="flex-wrap icon icon-up-arrow" />
          </a>
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
                <a href="/">
                  <div className="grid w-[300px] h-[125px] mx-auto">
                    <Image src="/images/logo-invert.png" alt="Logo" />
                  </div>
                </a>
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
              <a href="https://www.theweathernetwork.com">
                The Weather Network
              </a>
            </div>
            <div className="copyright">
              Copyright © KOS - 2021 {" | "}
              <a style={{ color: "#ffffff" }} href="/policies/">
                KOS Policies
              </a>
              {" | "}
              <a style={{ color: "#ffffff" }} href="/tac/">
                Terms and Conditions
              </a>
              {" | "}
              <a style={{ color: "#ffffff" }} href="/e911">
                e911
              </a>
              {" | "}
              <a style={{ color: "#ffffff" }} href="/wst/">
                Personal Web Space TAC
              </a>
              <br />
              <div>
                <span style={{ color: "#ffffff" }}>
                  <strong>Serving Eastern Ontario: </strong>
                </span>
                <a
                  style={{ color: "#fff" }}
                  href="/kingston-internet-services/"
                >
                  Kingston
                </a>
                {" | "}
                <a
                  style={{ color: "#fff" }}
                  href="/gananoque-internet-services/"
                >
                  Gananoque
                </a>
                {" | "}
                <a style={{ color: "#fff" }} href="/picton-internet-services/">
                  Picton
                </a>
                {" | "}
                <a
                  style={{ color: "#fff" }}
                  href="/brighton-internet-services/"
                >
                  Brighton
                </a>
                {" | "}
                <a style={{ color: "#fff" }} href="/trenton-internet-services/">
                  Trenton
                </a>
                {" | "}
                <a
                  style={{ color: "#fff" }}
                  href="/belleville-internet-services/"
                >
                  Belleville{" "}
                </a>
                {" | "}
                <a style={{ color: "#fff" }} href="/napanee-internet-services/">
                  Napanee
                </a>
              </div>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/Kingston-Online-Services-120301901358202/"
                    target="_blank noreferrer"
                  >
                    <div className="grid self-center w-12 h-12 p-2 text-white border-4 border-white border-solid rounded-full fill-current">
                      <FacebookIcon />
                    </div>
                  </a>
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
