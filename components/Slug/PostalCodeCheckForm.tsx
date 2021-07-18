import { useState } from "react"

import { classNames } from "@/lib/utils"

export default function PostalCodeCheckForm() {
  const [showIframe, setShowIframe] = useState(false)
  return (
    <div className="transition duration-500 border border-gray-300 border-solid hover:shadow-md">
      {/* modified <HoverBox> */}
      <div className="flex flex-col px-0 py-0 transition duration-500 border-t-4 border-transparent border-solid hover:border-blue-brand">
        {" "}
        <form
          action="https://kos.net/dslavail/dslavail-check.php"
          method="post"
          name="dslcheck"
          className="flex"
          target="Postal Code Search"
        >
          <input type="hidden" name="minidslc" value="1" />
          <input type="hidden" name="docheck" value="1" />
          <div className="flex flex-col px-2 pt-1 pb-2 mx-auto space-y-1 text-center border border-black border-solid shadow">
            <label htmlFor="postalcode" className="mb-1">
              Enter your Postal Code to check for services available in your
              area:
            </label>
            <div className="space-x-2">
              <input
                className="px-1 py-0 text-center"
                type="text"
                placeholder="K7K 5W7"
                name="postalcode"
                maxLength={7}
                size={7}
                id="postalcode"
              />
              <input
                type="submit"
                value="Check"
                name="sub"
                id="sub"
                className="px-1 text-white border border-black border-solid shadow-sm from-blue-600 bg-gradient-to-b to-blue-800"
                onClick={() => setShowIframe(true)}
              />
            </div>
          </div>
        </form>
        <iframe
          frameBorder="0"
          className={classNames(
            showIframe ? "block" : "hidden",
            "w-full h-64 mt-8"
          )}
          scrolling="no"
          src=""
          title="Postal Code Search"
          name="Postal Code Search"
        ></iframe>
      </div>
    </div>
  )
}
