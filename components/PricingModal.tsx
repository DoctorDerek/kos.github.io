/* This example requires Tailwind CSS v2.0+ */
import { Fragment, Dispatch, SetStateAction } from "react"
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
  packageTitle: string
  pricingBullets: string[]
  pricingDetails: string[]
}) {
  const PackageTitle = (
    <Dialog.Title
      as="div"
      className="font-bold text-blue-brand font-bold text-3xl sm:flex items-center uppercase"
    >
      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 bg-blue-brand">
        <BadgeCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <div className="sm:mt-0 sm:ml-4">{packageTitle}</div>
    </Dialog.Title>
  )
  const PricingBullets = (
    <ul className="text-lg">
      {pricingBullets.map((bullet: string) => (
        <li key={bullet}>
          <BULLET />
          {bullet}
        </li>
      ))}
    </ul>
  )
  const PricingDetails = (
    <ol className="list-decimal ml-12 mt-4 text-base">
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
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
              <div className="hidden sm:block absolute top-0 right-0 pt-6 pr-6">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpenModal(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="text-center sm:text-left">
                {PackageTitle}
                <div className="font-semibold text-lg text-gray-800 mt-4">
                  Account Includes:
                </div>
                {PricingBullets}
                {PricingDetails}
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse justify-between">
                <OrderNowButton color="blue" />
                <button
                  type="button"
                  className="h-8 w-full flex items-center justify-center rounded-md border border-gray-300 px-4 shadow-sm bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-2 sm:w-auto sm:text-sm"
                  onClick={() => setOpenModal(false)}
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
