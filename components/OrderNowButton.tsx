import Link from "@/components/CustomLink"
import { classNames } from "@/lib/utils"

export default function OrderNowButton({
  color = "red",
}: {
  color?: "red" | "blue"
}) {
  return (
    <div className="flex-shrink-0 py-4 text-center">
      <Link
        href="/order/?env=res&type=cable&plan=CABLE 15 - $39.95"
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
