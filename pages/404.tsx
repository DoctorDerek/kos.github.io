import Link from "@/components/Utils/CustomLink"

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start mx-4 md:mt-24 md:mb-32 md:justify-center md:items-center md:flex-row md:space-x-6 md:mx-0">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="mb-2 text-5xl font-semibold text-gray-700 md:mb-5 text-6xl font-extrabold tracking-tight text-black dark:text-gray-100 md:text-8xl md:border-r-2 md:px-6">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry, we were unable to locate the page you were searching for.
        </p>
        <p className="mb-6">
          If you believe you received this message in error, please{" "}
          <span className="underline text-blue-brand">
            <Link href="/contact">contact us</Link>
          </span>
          .
        </p>
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium text-white transition-colors duration-150 border border-transparent rounded-lg shadow bg-blue-brand focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 bold">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
