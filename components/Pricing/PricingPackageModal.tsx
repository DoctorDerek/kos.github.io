import { Dispatch, Fragment, SetStateAction } from "react"

import HoverBulletList from "@/components/Hover/HoverBulletList"
import OrderNowButton from "@/components/Pricing/OrderNowButton"
import { Dialog, Transition } from "@headlessui/react"
import { BadgeCheckIcon, XIcon } from "@heroicons/react/outline"

export default function PricingPackageModal({
  openModal,
  setOpenModal,
  packageName,
  modalBullets,
  modalFootnotes,
  selectedPlanForOrderNow,
}: {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  packageName: string
  modalBullets: string[]
  modalFootnotes: string[]
  // for modalBullets and modalFootnotes, any string type has been
  // converted to string[] already in <PricingPackageColumn>
  selectedPlanForOrderNow?: string // created in <PricingPackageColumn>
}) {
  function PricingPackageModalJSX() {
    return (
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-30 overflow-y-auto"
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
                  <OrderNowButton
                    color="blue"
                    selectedPlanForOrderNow={selectedPlanForOrderNow}
                  />
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
        className="flex items-center justify-start space-x-4 text-3xl font-bold text-blue-brand"
      >
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 bg-blue-brand">
          <BadgeCheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <div className="sm:ml-4">{packageName}</div>
      </Dialog.Title>
    )
  }
  function ModalBullets() {
    return (
      <>
        {modalBullets && (
          <HoverBulletList hoverBulletAsStrings={modalBullets as string[]} />
        )}
      </>
    )
  }
  function ModalFootnotes() {
    return (
      <div className="mt-4 ml-6 text-xs sm:ml-8 lg:ml-10 xl:ml-12 sm:text-sm md:text-base lg:text-lg">
        {modalFootnotes &&
          (modalFootnotes as string[]).map((footnote: string) => (
            <div key={footnote}>{footnote}</div>
          ))}
      </div>
    )
  }

  function PricingPackageModalContents() {
    return (
      <div>
        <PackageTitle />
        {modalBullets && <ModalBullets />}
        {modalFootnotes && <ModalFootnotes />}
      </div>
    )
  }

  return <PricingPackageModalJSX />
}
