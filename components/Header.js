import ImageFixed from "next/Image"
import DropdownMenu from "@/components/DropdownMenu"

const Column = ({ children }) => (
  <div className="flex items-center justify-center h-full col-span-1">
    {children}
  </div>
)

export default function Header() {
  return (
    <header className="container pt-2 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <Column>
          <button
            href="/order/"
            className="text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl font-bold border-none  uppercase transition-all transform-gpu duration-300 no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl border:none"
          >
            Order now
          </button>
        </Column>

        <Column>
          <div className="logo">
            <a href="/">
              <ImageFixed
                src="/assets/images/news/logo.png"
                alt
                height="125"
                width="300"
              />
            </a>
          </div>
        </Column>
        <Column>
          <div className="inline-block text-xs font-normal text-right text-blue-800 uppercase">
            <div className="mb-1 text-3xl leading-8 text-gray-700">
              <i className="text-4xl align-middle icon-call-telephone" />
              <span className="inline-block align-bottom text-[20px]">
                <strong>
                  Kingston:{" "}
                  <span style={{ color: "#A80532" }}>613-549-8667</span>
                </strong>
              </span>
              <br />
              <span className="inline-block align-bottom text-[20px]">
                <strong>
                  Belleville:{" "}
                  <span style={{ color: "#A80532" }}>613-968-7137</span>
                </strong>
              </span>
            </div>
            <div className="text-center">
              CALL &amp; DISCUSS YOUR INTERNET NEEDS
            </div>
          </div>
        </Column>
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
