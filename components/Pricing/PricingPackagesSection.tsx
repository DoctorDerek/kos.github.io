import { Fragment } from "react"

import PricingPackageColumn from "@/components/Pricing/PricingPackageColumn"

export default function PricingPackagesSection({
  pricingPackages,
  title,
}: {
  pricingPackages?: PricingPackage[]
  title?: string // pass in the page title to pass to <OrderNowButton>
}) {
  if (!pricingPackages) return null
  return (
    <div className="flex flex-wrap justify-center pt-6">
      {pricingPackages.map((pricingPackage, index) => (
        <Fragment key={pricingPackage.packageName}>
          <PricingPackageColumn
            color={index % 2 === 1 ? "teal" : "navy"}
            pricingPackage={pricingPackage}
            columnNumber={index + 1}
            title={title}
          />
          {(index + 1) % 3 === 0 && pricingPackages.length > 4 && (
            <div className="w-full h-0">
              {/*flex break every 3 items if there are more than 4 items*/
              /*this improves the layout of 5- and 6-item pricing pages*/}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
