import ImageFixed from "next/image"
import Image from "@/components/Image"
import DropdownMenu from "@/components/DropdownMenu"
import PhoneIcon from "@/data/material-icons/phone_black_48dp.svg"

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
            className="text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl font-bold border-none uppercase no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl border:none"
          >
            Order now
          </button>
        </Column>

        <Column>
          <a href="/">
            <ImageFixed
              src="/assets/images/news/logo.png"
              alt="Logo for Kingston Online Services - KOS is an Internet Service Provider serving Kingston and Belleville, Ontario"
              height="125"
              width="300"
            />
          </a>
        </Column>
        <Column>
          <div className="text-xs font-normal text-right text-blue-800 uppercase">
            <div className="flex mb-1 text-3xl leading-8 text-gray-700">
              <div className="grid self-center w-8 h-8 p-1 border-2 border-black border-solid rounded-full">
                <Image
                  src="/assets/material-icons/phone_black_48dp.svg"
                  alt=""
                />
                {/* alt="" for purely decorative icon */}
              </div>
              <div>
                <span className="text-[20px]">
                  <strong>
                    Kingston:{" "}
                    <span style={{ color: "#A80532" }}>613-549-8667</span>
                  </strong>
                </span>
                <br />
                <span className="text-[20px]">
                  <strong>
                    Belleville:{" "}
                    <span style={{ color: "#A80532" }}>613-968-7137</span>
                  </strong>
                </span>
              </div>
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
