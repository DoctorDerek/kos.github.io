import { Fragment, Dispatch, SetStateAction } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { BadgeCheckIcon, XIcon } from "@heroicons/react/outline"
import HoverBulletList from "@/components/HoverBulletList"
import OrderNowButton from "@/components/OrderNowButton"

export default function PricingPackageModal({
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
  function PricingPackageModalJSX() {
    return (
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-10 overflow-y-auto"
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
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
              <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:mt-8 sm:align-middle sm:max-w-5xl sm:w-auto sm:p-6">
                <div className="absolute top-0 right-0 pt-6 pr-6">
                  <button
                    type="button"
                    className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setOpenModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <PricingPackageModalContents />
                <div className="flex items-center justify-between pl-1 mt-5 space-x-2 sm:mt-4 lg:pl-2">
                  <button
                    type="button"
                    className="flex items-center justify-center h-8 px-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
  function PackageTitle() {
    return (
      <Dialog.Title
        as="div"
        className="flex items-center justify-start space-x-4 text-3xl font-bold uppercase text-blue-brand"
      >
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 bg-blue-brand">
          <BadgeCheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <div className="sm:ml-4">{packageTitle}</div>
      </Dialog.Title>
    )
  }
  function PricingBullets() {
    return (
      <>
        <div className="mt-4 text-sm font-semibold text-gray-800 sm:text-base md:text-lg lg:text-xl">
          Account Includes:
        </div>
        <HoverBulletList hoverBulletAsStrings={pricingBullets} />
      </>
    )
  }
  function PricingDetails() {
    return (
      <ol className="mt-4 ml-6 text-xs list-decimal sm:ml-8 lg:ml-10 xl:ml-12 sm:text-sm md:text-base lg:text-lg">
        {pricingDetails.map((detail: string) => (
          <li key={detail}>{detail}</li>
        ))}
      </ol>
    )
  }

  function PricingPackageModalContents() {
    return (
      <div>
        <PackageTitle />
        <PricingBullets />
        <PricingDetails />
      </div>
    )
  }

  return <PricingPackageModalJSX />
}
