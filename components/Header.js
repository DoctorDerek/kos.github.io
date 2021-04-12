import ImageFixed from "next/Image"
import DropdownMenu from "@/components/DropdownMenu"

const Column = ({ children }) => (
  <div className="flex items-center justify-center h-full col-span-1">
    {children}
  </div>
)

/*

header .phone {
  @apply inline-block text-xs font-normal text-right text-blue-800 uppercase;
  padding: 30px 0 0 0;
}

header .phone span {
  @apply inline-block align-bottom;
}

header .phone .number {
  @apply mb-1 text-3xl leading-8 text-gray-700;
}

header .phone .number .icon {
  @apply text-4xl align-middle;
  padding: 0 10px 0 0;
}

header .first-mobile {
  @apply float-right;
}
 */

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
