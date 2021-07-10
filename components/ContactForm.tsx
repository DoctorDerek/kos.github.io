import { useRouter } from "next/router"
import { Fragment } from "react"

import IconCard from "@/components/IconCard"
import { classNames } from "@/lib/utils"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm({
  contactForm,
}: {
  contactForm: ContactField[]
}) {
  // get the GET parameters object, query
  const { query } = useRouter()
  // /order?plan=... from an OrderNow button
  const selectedPlan = query.selectedPlan ? String(query.selectedPlan) : ""
  if (selectedPlan) {
    // insert the selected plan as a new <input> of type "text"
    // just before the how did you hear about us field
    const commentsIndex = contactForm.findIndex((value: ContactField) =>
      value.field.toLocaleLowerCase().includes("how")
    ) // returns -1 if not found; with .splice() a -1 index is second from last
    contactForm.splice(commentsIndex, 0, {
      field: "Selected Plan",
      type: "textarea",
      bold: "semibold",
      value: selectedPlan,
    })
  }

  // Verify the contactForm data
  const submitContactField = contactForm.find(
    (item: ContactField) => item.type === "submit" && Boolean(item.field)
  )
  const endpointContactField = contactForm.find(
    (item: ContactField) => item.type === "endpoint" && Boolean(item.field)
  )
  if (contactForm.length < 3 || !submitContactField || !endpointContactField) {
    throw new Error(
      'At least 3 fields are required in <ContactForm>: a "submit" button, an "endpoint" destination for Formspree, and at least one form field. Please correct the Markdown file to fix this error.'
    )
  }

  // Configure the Formspree endpoint using the given "field" value
  const endpoint = endpointContactField.field
  if (!endpoint) {
    throw new Error(
      `The Formspree "endpoint" is required, but the value ${endpoint} was found. Please correct the Markdown file.`
    )
  }
  const [state, handleSubmit] = useForm(endpoint)

  if (state.succeeded) {
    return (
      <IconCard
        icon="check"
        label="Thanks for contacting us!"
        text="We'll be in touch shortly."
      />
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      id="get-in-touch"
      className="grid grid-cols-2 gap-3 text-gray-900 auto-rows-min dark:text-gray-100"
    >
      {contactForm.map(
        ({
          field,
          type,
          placeholder,
          size,
          options,
          bold,
          color,
          optional,
          value,
        }: ContactField) => {
          const name = field // the attribute name="" can be basically anything
          const id = field.replace(/\s/g, "") // id="" can't have whitespace
          type = type.toLocaleLowerCase() as ContactFieldType
          if (
            !(
              type === "checkbox" ||
              type === "email" ||
              type === "endpoint" ||
              type === "radio" ||
              type === "select" ||
              type === "submit" ||
              type === "text" ||
              type === "textarea"
            )
          ) {
            throw new Error(
              `An unknown type "${type}" was found in a ContactField in <ContactForm>, please correct the Markdown file. Valid types are: "checkbox" | "email" | "endpoint" | "radio" | "select" | "submit" | "text" | "textarea"`
            )
          }
          if (type === "endpoint") return <Fragment /> // not a real input
          if (
            (!options &&
              (type === "select" || type === "checkbox" || type === "radio")) ||
            (Array.isArray(options) && options.length <= 1)
          ) {
            throw new Error(
              `The field options is required and needs at least 2 entries when using type="select", type="checkbox", or type="radio" as a ContactField in <ContactForm>. The options field should be an array of strings, and this is what was found: ${options}. Please correct the Markdown file. For type="select", please note that the first entry will be used as the placeholder text -- and any value given as placeholder will not be used.`
            )
          }
          return (
            <div
              key={field}
              className={size === "half" ? "col-span-1" : "col-span-2"}
            >
              {type !== "submit" && type !== "checkbox" && type !== "radio" && (
                // "endpoint" is screened out above with a return statement
                <label
                  htmlFor={id}
                  className={
                    bold === "bold"
                      ? "font-bold"
                      : bold === "semibold"
                      ? "font-semibold"
                      : "font-normal"
                  }
                >
                  {field}
                </label>
              )}
              {(type === "text" || type === "email") && (
                <input
                  type={type}
                  name={name}
                  id={id}
                  placeholder={placeholder}
                  required={!optional}
                  className={classNames(
                    "w-full rounded",
                    name.toLocaleLowerCase().includes("plan")
                      ? "text-gray-800 bg-gray-100" // Selected Plan
                      : "" // normal text or email inputs
                  )}
                  value={value ? value : ""}
                  disabled={
                    // gray out and disable the "Selected Plan", if any
                    name.toLocaleLowerCase().includes("plan") ? true : undefined
                  }
                />
              )}
              {(type === "checkbox" || type === "radio") &&
                Array.isArray(options) &&
                options.length > 0 && ( // make radio buttons or checkboxes
                  <div id={id} className={"flex flex-wrap"}>
                    {options.map((option) => (
                      <div key={option}>
                        <input
                          type={type}
                          name={name}
                          id={option}
                          required={!optional}
                          className={classNames(
                            type === "radio" ? "rounded-full" : "rounded",
                            "mr-1"
                          )}
                          value={option} // this will be passed on to the form
                          checked={
                            // check if this option is part of the selectedPlan
                            // e.g. pre-select the "Residential" radio button
                            selectedPlan &&
                            selectedPlan
                              .toLocaleLowerCase()
                              .includes(option.toLocaleLowerCase())
                              ? true
                              : undefined // false does not work here 😀
                          }
                        />
                        <label
                          htmlFor={option}
                          className={classNames(
                            bold === "bold"
                              ? "font-bold"
                              : bold === "semibold"
                              ? "font-semibold"
                              : "font-normal",
                            "mr-3"
                          )}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              {type === "select" &&
                Array.isArray(options) &&
                options.length > 0 && (
                  <select
                    name={name}
                    id={id}
                    required={!optional}
                    className="w-full rounded"
                  >
                    {options.map((option, index) => (
                      <option key={option} value={index === 0 ? "" : option}>
                        {/* value="" indicates the placeholder field */}
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              {type === "textarea" && (
                <textarea
                  name={name}
                  id={id}
                  placeholder={placeholder}
                  required={!optional}
                  className={classNames(
                    "w-full rounded",
                    name.toLocaleLowerCase().includes("plan")
                      ? "text-gray-800 bg-gray-100 h-24" // Selected Plan
                      : "h-40" // other <textarea>s, such as Comments or Message
                  )}
                  value={value ? value : ""}
                  disabled={
                    // gray out and disable the "Selected Plan", if any
                    name.toLocaleLowerCase().includes("plan") ? true : undefined
                  }
                />
              )}
              {type !== "submit" && (
                <ValidationError
                  field={name} // field — the name of the field for which to display errors (required)
                  prefix={field} // prefix — the human-friendly name of the field (optional, defaults to "This field")
                  errors={state.errors} // errors — the object containing validation errors (required)
                />
              )}
              {type === "submit" && (
                <button
                  className={classNames(
                    "flex-shrink-0 py-4 text-center",
                    color === "red" ? "btn-orange" : "",
                    "transition duration-500 btn"
                  )}
                  formAction="submit"
                  disabled={state.submitting}
                >
                  {field}
                </button>
              )}
            </div>
          )
        }
      )}
    </form>
  )
}
