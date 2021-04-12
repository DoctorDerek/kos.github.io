import Image from "@/components/Image"
import DropdownMenu from "@/components/DropdownMenu"

export default function Header() {
  return (
    <header className="container pt-2 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1">
          <div className="phone">
            <div className="number">
              <i className="icon icon-call-telephone" />
              <span style={{ fontSize: 20 }}>
                <strong>
                  Kingston:{" "}
                  <span style={{ color: "#A80532" }}>613-549-8667</span>
                </strong>
              </span>
              <br />
              <span style={{ fontSize: 20 }}>
                <strong>
                  Belleville:{" "}
                  <span style={{ color: "#A80532" }}>613-968-7137</span>
                </strong>
              </span>
            </div>
            <div>CALL &amp; DISCUSS YOUR INTERNET NEEDS </div>
          </div>
        </div>
        <div className="pl-4 pr-4 sm:w-1/3 lg:w-1/4">
          <div className="!mt-6">
            <button
              href="/order/"
              className="!mt-10 text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none  uppercase transition-all duration-300 no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl border:none"
            >
              Order now
            </button>
          </div>
        </div>
        <div className="pl-4 pr-4 lg:w-1/6 visible-lg" />
        <div className="pl-4 pr-4 text-center sm:w-1/3">
          <div className="logo">
            <a href="/">
              <div className="grid w-full h-40">
                <Image src="/assets/images/news/logo.png" alt />
              </div>
            </a>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="flex flex-wrap pl-0 list-reset lg:hidden navbar-toggle"
      >
        <i className="icon icon-menu" />
        <i className="icon icon-cancel" />
      </button>
      <DropdownMenu />
      <div id="navbar-height-col" />
    </header>
  )
}
