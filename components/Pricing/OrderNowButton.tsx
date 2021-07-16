import Link from "@/components/Utils/CustomLink"
import { classNames } from "@/lib/utils"

export default function OrderNowButton({
  color = "red",
  selectedPlanForOrderNow,
}: {
  color?: "red" | "blue"
  selectedPlanForOrderNow?: string // created in <PricingPackageColumn>
}) {
  return (
    <div className="flex-shrink-0 py-4 text-center">
      <Link
        href={[
          "/order/",
          selectedPlanForOrderNow
            ? `?selectedPlan=${selectedPlanForOrderNow}`
            : "",
        ].join("")}
        className={classNames(
          color === "red" ? "btn-orange" : "",
          "transition duration-500 btn"
        )}
      >
        Order Now
      </Link>
    </div>
  )
}
