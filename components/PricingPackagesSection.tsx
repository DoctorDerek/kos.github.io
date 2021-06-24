import { Fragment } from "react"
import PricingPackageColumn from "@/components/PricingPackageColumn"

export default function PricingPackagesSection({
  pricingPackages,
}: {
  pricingPackages: PricingPackage[]
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {pricingPackages.map((pricingPackage, index) => (
          <Fragment key={pricingPackage.packageName}>
            <PricingPackageColumn
              color={index % 2 === 1 ? "teal" : "navy"}
              pricingPackage={pricingPackage}
              columnNumber={index + 1}
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
    </>
  )
}
