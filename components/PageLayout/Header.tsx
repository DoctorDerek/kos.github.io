import NavDropdownMenu from "@/components/PageLayout/NavDropdownMenu"
import OrderNowButton from "@/components/Pricing/OrderNowButton"
import Link from "@/components/Utils/CustomLink"
import PhoneIcon from "@/data/material-icons/phone_black_48dp.svg"
import { addPhoneLinkToTextIfPresent } from "@/lib/utils"

const Column = ({ children }: { children?: any }) => (
  <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 h-full col-span-1 lg:flex-grow-0 sm:flex-grow">
    {children}
  </div>
)

/**
 * <Header> has same max-width as <SectionWrapper /> when useMaxWidth is true.
 */
export default function Header({ useMaxWidth }: { useMaxWidth?: boolean }) {
  return (
    <header id="top" className={useMaxWidth ? "max-w-7xl mx-auto" : ""}>
      <div className="flex flex-col items-center justify-between w-full pt-4 mx-auto space-y-6 md:items-end lg:p-6 md:space-y-0 md:flex-row md:pt-0">
        <Column>
          <Link href="/" className="md:max-w-[250px] lg:max-w-full">
            <img
              src="/assets/images/news/logo.png"
              alt="Logo for Kingston Online Services (KOS), an Internet Service Provider serving Kingston and Belleville, Ontario"
              height="125"
              width="300"
            />
          </Link>
        </Column>
        <div className="md:flex md:items-center md:h-22">
          <OrderNowButton />
        </div>
        <Column>
          <div className="flex flex-col group">
            <div className="flex mb-1 text-gray-700 justify-evenly">
              <div className="grid self-center w-12 h-12 p-1 transition-all duration-500 border-2 border-current border-solid rounded-full fill-current group-hover:bg-blue-brand group-hover:text-gray-100">
                <PhoneIcon aria-hidden="true" className="w-full h-full" />
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
            <div className="text-base font-bold text-right text-blue-800 uppercase md:text-sm lg:text-base">
              CALL &amp; DISCUSS YOUR INTERNET NEEDS
            </div>
          </div>
        </Column>
      </div>
      <NavDropdownMenu />
    </header>
  )
}
