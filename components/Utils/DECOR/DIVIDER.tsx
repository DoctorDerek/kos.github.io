import ImageFixed from "next/image"

export default function DIVIDER(
  { color }: { color?: "gray" | "white" } = { color: "gray" }
) {
  return (
    <div className="pb-4 text-center">
      <ImageFixed
        src={
          color === "white"
            ? "/images/h-decor-white.png"
            : "/images/h-decor.png" // gray is default
        }
        height="4px"
        width="64px"
        alt="Decoration"
      />
      {/* alt="" acceptable for purely decorative elements */}
    </div>
  )
}
