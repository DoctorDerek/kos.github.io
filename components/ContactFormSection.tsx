import { Fragment } from "react"

import ContactForm from "@/components/ContactForm"
import IconCard from "@/components/IconCard"
import { classNames } from "@/lib/utils"

export function ContactFormSection({
  officeAddressLeft,
  officeAddressRight,
  contactForm,
}: {
  officeAddressLeft?: IconCard[]
  officeAddressRight?: IconCard[]
  contactForm?: ContactField[]
}) {
  // the contact form is always required
  if (!contactForm) return null
  // if either is present, both left and right office addresses are required
  if (officeAddressLeft && !officeAddressRight) return null
  if (!officeAddressLeft && officeAddressRight) return null
  return (
    <div
      className={classNames(
        "mx-auto",
        // Note: fullWidth is not used here, but the widths are the same
        officeAddressLeft && officeAddressRight
          ? "max-w-5xl md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 auto-cols-min gap-6 px-2" // 3 column layout is used on /contact
          : "max-w-xl px-4" // just the contact form, i.e. /order
      )}
    >
      {officeAddressLeft && (
        <OfficeAddressColumn iconCards={officeAddressLeft} />
      )}
      {contactForm && <ContactForm contactForm={contactForm} />}
      {officeAddressRight && (
        <OfficeAddressColumn iconCards={officeAddressRight} />
      )}
    </div>
  )

  function OfficeAddressColumn({ iconCards }: { iconCards: IconCard[] }) {
    return (
      <div>
        {iconCards.map((iconCard: IconCard) => (
          <Fragment key={`${iconCard.text}${iconCard.label}`}>
            <IconCard {...iconCard} />
          </Fragment>
        ))}
      </div>
    )
  }
}
