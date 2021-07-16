import ImageFixed from "next/image"

export default function DIVIDER() {
  return (
    <div className="pb-4 text-center">
      <ImageFixed
        src="/images/h-decor.png"
        height="4px"
        width="64px"
        alt="Decoration"
      />
      {/* alt="" acceptable for purely decorative elements */}
    </div>
  )
}
