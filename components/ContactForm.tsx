import { Fragment } from "react"

import IconCard from "@/components/IconCard"
import { classNames } from "@/lib/utils"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm({
  contactForm,
}: {
  contactForm: ContactField[]
}) {
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
        }: ContactField) => {
          const name = field // the attribute name="" can be basically anything
          const id = field.replace(/\W/g, "") // id="" can't have whitespace
          type = type.toLocaleLowerCase() as ContactFieldType
          if (
            !(
              type === "text" ||
              type === "email" ||
              type === "select" ||
              type === "textarea" ||
              type === "submit" ||
              type === "endpoint"
            )
          ) {
            throw new Error(
              `An unknown type "${type}" was found in a ContactField in <ContactForm>, please correct the Markdown file. Valid types are: "text" | "email" | "select" | "textarea" | "submit" | "endpoint"`
            )
          }
          if (type === "endpoint") return <Fragment /> // not a real input
          if (
            (type === "select" && !options) ||
            (Array.isArray(options) && options.length <= 1)
          ) {
            throw new Error(
              `The field options is required and needs at least 2 entries when using the dropdown menu <select> element as a ContactField in <ContactForm>. Please correct the Markdown file, and note the first entry will be used as the placeholder text. The options field should be an array of strings, and this is what was found: ${options}`
            )
          }
          return (
            <div
              key={field}
              className={size === "half" ? "col-span-1" : "col-span-2"}
            >
              {type !== "submit" && (
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
                  className="w-full rounded"
                />
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
                  className="w-full h-40 rounded"
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
