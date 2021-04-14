import Image from "@/components/Image"

const isRequired = () => {
  throw new Error("Missing required attribute in SlideshowSlide component")
}

const SlideshowSlide = ({
  src = isRequired(),
  alt = isRequired(),
  text1 = isRequired(),
  text2 = isRequired(),
  href = isRequired(),
  text3 = isRequired(),
  hidden = false,
}) => {
  // Both transform-gpu and style={{ minWidth: 0, maxWidth: 0 }}
  // are required to eliminate Cumulative Layout Shift (CLS) here.
  return (
    <div
      className={
        "grid grid-cols-1 transform-gpu keen-slider__slide" +
        (hidden ? " hidden" : "")
      }
      style={{ minWidth: 0, maxWidth: 0 }}
    >
      <div className="grid w-full h-full">
        <Image src={src} alt={alt} />
      </div>
      <div className="absolute grid w-full h-full grid-rows-3 opacity-80">
        <div className="row-span-1" />
        <div className="grid row-span-1 text-center">
          <div className="text text1">
            <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
              {text1}
            </span>
          </div>
          <div className="text text2">
            <strong>
              <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
                {text2}
              </span>
            </strong>
          </div>
          <div className="text text3">
            <button
              href={href}
              className="text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl font-bold border-none uppercase no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl"
            >
              {text3}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideshowSlide
