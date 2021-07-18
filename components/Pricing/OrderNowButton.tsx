import BUTTON from "@/components/Utils/DECOR/BUTTON"

export default function OrderNowButton({
  color = "red",
  selectedPlanForOrderNow,
}: {
  color?: "red" | "blue"
  selectedPlanForOrderNow?: string // created in <PricingPackageColumn>
}) {
  return (
    <div className="mx-auto">
      <BUTTON
        href={[
          "/order/",
          selectedPlanForOrderNow
            ? `?selectedPlan=${selectedPlanForOrderNow}`
            : "",
        ].join("")}
        text="Order Now"
        color={color}
      />
    </div>
  )
}
