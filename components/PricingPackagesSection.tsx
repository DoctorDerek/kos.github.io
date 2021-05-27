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
          <>
            <PricingPackageColumn
              color={index % 2 === 1 ? "teal" : "navy"}
              pricingPackage={pricingPackage}
              key={pricingPackage.packageName}
              columnNumber={index + 1}
            />
            {index % 3 === 0 && index > 0 && (
              <div className="w-full h-0">{/*flex break every 3 items*/}</div>
            )}
          </>
        ))}
      </div>
    </>
  )
}
