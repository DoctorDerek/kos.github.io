/* This example requires Tailwind CSS v2.0+ */
import { Fragment, Dispatch, SetStateAction, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { BadgeCheckIcon, XIcon } from "@heroicons/react/outline"
import { BULLET } from "@/components/UTILS"
import OrderNowButton from "@/components/OrderNowButton"

export default function PricingModal({
  openModal,
  setOpenModal,
  packageTitle = "Cable 15",
  pricingBullets = [
    "Up to 15.0 Mbps download speed, 2.0 Mbps upload speed",
    "200 GB of data transfer per month",
    "Free spam and virus protection",
    "Two e-mail addresses with web e-mail, IMAP4, or POP3 access",
    "5 hours of dial-up access provided",
    "100 MB of Personal Web Space available for use",
    "Access to value-added services",
    "Technical support with office repair",
    "Access to web-based e-mail",
  ],
  pricingDetails = [
    "Requires Modem rental or purchase.",
    "For residential purposes only, must not exceed a reasonable amount of usage",
    "$50 Setup Fee (waived for existing Cable Internet Subscribers for service at their existing location)",
  ],
}: {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  packageTitle?: string
  pricingBullets?: string[]
  pricingDetails?: string[]
}) {
  const PackageTitle = (
    <Dialog.Title
      as="div"
      className="font-bold text-blue-brand font-bold text-3xl flex items-center justify-start space-x-4 uppercase"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 bg-blue-brand">
        <BadgeCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <div className="sm:ml-4">{packageTitle}</div>
    </Dialog.Title>
  )
  const PricingBullets = (
    <ul className="sm:text-base md:text-lg lg:text-xl text-sm mt-4">
      <div className="font-semibold text-gray-800">Account Includes:</div>
      {pricingBullets.map((bullet: string) => (
        <Fragment key={bullet}>
          <PricingBullet bullet={bullet} />
        </Fragment>
      ))}
    </ul>
  )
  function PricingBullet({ bullet }: { bullet: string }) {
    const [hover, setHover] = useState(false)
    return (
      <li
        className="flex items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <BULLET hover={hover} responsive={true} />
        {bullet}
      </li>
    )
  }
  const PricingDetails = (
    <ol className="list-decimal ml-6 sm:ml-8 lg:ml-10 xl:ml-12 mt-4 sm:text-sm md:text-base lg:text-lg text-xs">
      {pricingDetails.map((detail: string) => (
        <li key={detail}>{detail}</li>
      ))}
    </ol>
  )

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:mt-8 sm:align-middle sm:max-w-5xl sm:w-auto sm:p-6">
              <div className="absolute top-0 right-0 pt-6 pr-6">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpenModal(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div>
                {PackageTitle}
                {PricingBullets}
                {PricingDetails}
              </div>
              <div className="mt-5 sm:mt-4 flex justify-between space-x-2 items-center pl-1 lg:pl-2">
                <button
                  type="button"
                  className="h-8 flex items-center justify-center rounded-md border border-gray-300 px-4 shadow-sm bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpenModal(false)}
                >
                  <span>Close</span>
                </button>
                <OrderNowButton color="blue" />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
