import ImageFixed from "next/image"

import Link from "@/components/CustomLink"
import DropdownMenu from "@/components/DropdownMenu"
import PhoneIcon from "@/data/material-icons/phone_black_48dp.svg"
import { addPhoneLinkToTextIfPresent } from "@/lib/utils"

const Column = ({ children }: { children?: any }) => (
  <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 h-full col-span-1 lg:flex-grow-0 sm:flex-grow">
    {children}
  </div>
)

export default function Header() {
  return (
    <header>
      <div className="flex flex-col items-center justify-between w-full mx-auto space-y-6 lg:p-6 md:space-y-0 md:flex-row">
        <Column>
          <Link href="/" className="md:max-w-[250px] lg:max-w-full">
            <ImageFixed
              src="/assets/images/news/logo.png"
              alt="Logo for Kingston Online Services (KOS), an Internet Service Provider serving Kingston and Belleville, Ontario"
              height="125"
              width="300"
            />
          </Link>
        </Column>

        <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 h-full col-span-1 w-36">
          <Link
            href="/order/"
            className="text-white active:focus:hover:outline-none active:focus:hover:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl font-bold border-none uppercase no-underline btn btn-orange active:focus:bg-blue-brand bg-[#b0243d] shadow-xl border:none whitespace-nowrap"
          >
            Order now
          </Link>
        </div>

        <Column>
          <div className="flex flex-col group">
            <div className="flex mb-1 text-3xl leading-8 text-gray-700">
              <div className="grid self-center w-12 h-12 p-1 mx-3 transition-all duration-500 border-2 border-current border-solid rounded-full fill-current group-hover:bg-blue-brand group-hover:text-gray-100">
                <PhoneIcon />
              </div>
              <div className="text-xl font-bold lg:text-xl md:text-base whitespace-nowrap">
                <table>
                  <thead>
                    <tr>
                      <td>Kingston:&nbsp;</td>
                      <td>
                        {addPhoneLinkToTextIfPresent({
                          stringToTest: "613-549-8667",
                          color: "red",
                        })}
                      </td>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <td>Belleville:&nbsp;</td>
                      <td>
                        {addPhoneLinkToTextIfPresent({
                          stringToTest: "613-968-7137",
                          color: "red",
                        })}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="text-xs font-bold text-right text-blue-800 uppercase lg:text-base">
              CALL &amp; DISCUSS YOUR INTERNET NEEDS
            </div>
          </div>
        </Column>
      </div>
      <DropdownMenu />
    </header>
  )
}
