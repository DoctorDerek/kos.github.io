export default function OrderNowButton({
  color = "blue",
}: {
  color: "red" | "blue"
}) {
  return (
    <div className="py-4 text-center">
      <a
        href="/order/?env=res&type=cable&plan=CABLE 15 - $39.95"
        className="transition duration-500 btn"
      >
        Order Now
      </a>
    </div>
  )
}
