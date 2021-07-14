import Script from "next/script"

import Image from "@/components/CustomImage"
import Link from "@/components/CustomLink"
import FooterColumn from "@/components/FooterColumn"
import FacebookIcon from "@/data/material-icons/facebook.svg"
import HERO_ICONS from "@/lib/HERO_ICONS"

export default function Footer() {
  const officeAddressLeft: IconCard = {
    icon: "location-marker",
    label: ["The LaSalle", "303 Bagot St., 16A", "Kingston, ON K7K 5W"],
    text: "613-549-8667",
  }

  const officeAddressRight: IconCard = {
    icon: "location-marker",
    label: ["183 Front Street", "(near City Hall)", "Belleville, ON K8N 2Y9"],
    text: "613-968-7137",
  }

  const ArrowUpIcon = HERO_ICONS["arrow-up"]

  return (
    <footer className="relative w-full h-full text-center border-blue-brand border-solid border-b-[6px] print:hidden">
      <div className="grid w-full h-160 md:h-96">
        <Image
          src="/images/footer-bg.jpg"
          alt="Decoration for Kingston Online Services serving Kingston and Belleville, ON"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center absolute transform-gpu left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <FooterColumn officeAddress={officeAddressLeft} />
          <FooterColumn logo={true} />
          <FooterColumn officeAddress={officeAddressRight} />
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12 mb-6 mr-6 transition-all duration-300 border-2 border-white rounded-full fill-current group hover:bg-white">
          <Link href="#top" className="text-white group-hover:text-blue-brand">
            <ArrowUpIcon />
          </Link>
        </div>
        <div>
          <div id="plemx-root" className="h-6">
            <Script src="/js/theWeatherNetwork.js" />
          </div>
        </div>
        <div className="text-base leading-5 text-white">
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
            <Link className="text-white" href="/kingston-internet-services/">
              Kingston
            </Link>
            {" | "}
            <Link className="text-white" href="/gananoque-internet-services/">
              Gananoque
            </Link>
            {" | "}
            <Link className="text-white" href="/picton-internet-services/">
              Picton
            </Link>
            {" | "}
            <Link className="text-white" href="/brighton-internet-services/">
              Brighton
            </Link>
            {" | "}
            <Link className="text-white" href="/trenton-internet-services/">
              Trenton
            </Link>
            {" | "}
            <Link className="text-white" href="/belleville-internet-services/">
              Belleville
            </Link>
            {" | "}
            <Link className="text-white" href="/napanee-internet-services/">
              Napanee
            </Link>
          </div>
        </div>
        <Link href="https://www.facebook.com/Kingston-Online-Services-120301901358202/">
          <div className="grid self-center w-12 h-12 p-2 text-white transition-all duration-300 border-4 border-white border-solid rounded-full fill-current hover:text-blue-brand hover:bg-white">
            <FacebookIcon />
          </div>
        </Link>
      </div>
      <canvas
        id="footerSea"
        className="absolute bottom-0 z-0 w-full opacity-50 pointer-events-none"
      />
      <div
        id="sea"
        className="bottom-0 w-full pointer-events-none opacity-10"
      ></div>
    </footer>
  )
}

// wave effect
/*
function waveEffect(canvas: any, parent: any, color: any) {
  var TAU = Math.PI * 2
  var density = 1
  var speed = 1
  var res = 0.005 // percentage of screen per x segment
  var outerScale = 0.05 / density
  var inc = 0
  var c = $(canvas)[0]
  var ctx = c.getContext("2d")
  var grad = ctx.createLinearGradient(0, 0, 0, c.height * 4)

  function onResize() {
    $(canvas).attr({
      width: $(parent).width() + "px",
      height: $(parent).height() + "px",
    })
  }

  onResize()
  loop()
  $window.resize(onResize)

  function loop() {
    inc -= speed
    drawWave(color)
    requestAnimationFrame(loop)
  }

  function drawWave(color) {
    var w = c.offsetWidth
    var h = c.offsetHeight
    var cx = w * 0.5
    var cy = h * 0.5
    ctx.clearRect(0, 0, w, h)
    var segmentWidth = w * res
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(0, cy)
    for (var i = 0, endi = 1 / res; i <= endi; i++) {
      var _y =
        cy +
        Math.sin((i + inc) * TAU * res * density) *
          cy *
          Math.sin(i * TAU * res * density * outerScale)
      var _x = i * segmentWidth
      ctx.lineTo(_x, _y)
    }
    ctx.lineTo(w, h)
    ctx.lineTo(0, h)
    ctx.closePath()
    ctx.fill()
  }
}
if (plugins.waveSliderFooter.length) {
  waveEffect(plugins.waveSliderFooter, ".page-footer", "#28bceb")
}
if (plugins.waveSlider.length) {
  waveEffect(plugins.waveSlider, "#slider", "#ffffff")
}
*/
