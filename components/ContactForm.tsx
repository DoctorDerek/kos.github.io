import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

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
  // i.e. /order?selectedPlan=... originating from an <OrderNow> button
  const [selectedPlanState, setSelectedPlanState] = useState("")
  const [contactFormState, setContactFormState] = useState(contactForm)
  useEffect(() => {
    setSelectedPlanState(() => {
      const selectedPlan = query.selectedPlan ? String(query.selectedPlan) : ""
      if (
        selectedPlan &&
        // dummy checks, just to be extra sure not to double-add Selected Plan
        !selectedPlanState &&
        !contactFormState.find(
          (value: ContactField) => value.field === "Selected Plan"
        )
      ) {
        setContactFormState((currentContactFormState) => {
          // insert the selected plan as a new <input> of type "text"
          // just before the how did you hear about us field
          const commentsIndex = currentContactFormState.findIndex(
            (value: ContactField) =>
              value.field.toLocaleLowerCase().includes("how")
          ) // returns -1 if not found; .splice() a -1 index is second from last
          currentContactFormState.splice(commentsIndex, 0, {
            field: "Selected Plan",
            type: "textarea",
            bold: "semibold",
            value: selectedPlan,
          })
          // disabled fields are not submitted with forms, so add a hidden input
          currentContactFormState.splice(commentsIndex, 0, {
            field: "Selected Plan",
            type: "hidden",
            value: selectedPlan,
          })
          return currentContactFormState
        })
      }
      return selectedPlan
    })
  }, [query.selectedPlan, selectedPlanState, contactFormState])

  // Verify the contactFormState data
  const submitContactFields = contactFormState.filter(
    (item: ContactField) => item.type === "submit" && Boolean(item.field)
  )
  const endpointContactFields = contactFormState.filter(
    (item: ContactField) => item.type === "endpoint" && Boolean(item.field)
  )
  if (submitContactFields.length > 1 || endpointContactFields.length > 1) {
    throw new Error(
      `There should be exactly one each of "submit" or "endpoint" fields in <ContactForm>. Please correct the Markdown file to fix this error. ${submitContactFields} was found for "submit" fields, and ${endpointContactFields} was found for "endpoint fields.`
    )
  }
  const submitContactField = submitContactFields[0]
  const endpointContactField = endpointContactFields[0]
  if (
    contactFormState.length < 3 ||
    !submitContactField ||
    !endpointContactField
  ) {
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
      {contactFormState.map(
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
              type === "hidden" ||
              type === "radio" ||
              type === "select" ||
              type === "submit" ||
              type === "text" ||
              type === "textarea"
            )
          ) {
            // an invalid or undefined type could be given in the Markdown file
            throw new Error(
              `An unknown type "${type}" was found in a ContactField in <ContactForm>, please correct the Markdown file. Valid types are: "checkbox" | "email" | "endpoint" | "radio" | "select" | "submit" | "text" | "textarea"`
            )
          }
          if (type === "endpoint") return <Fragment key={endpoint} />
          // "endpoint" is not a real input -- just the form's endpoint
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
              {type !== "submit" &&
                type !== "checkbox" &&
                type !== "radio" &&
                type !== "hidden" && (
                  // "endpoint" is screened out above with a return statement
                  <label
                    htmlFor={id}
                    className={classNames(
                      "flex items-center space-x-2",
                      bold === "bold"
                        ? "font-bold"
                        : bold === "semibold"
                        ? "font-semibold"
                        : "font-normal"
                    )}
                  >
                    <span>{field}</span>
                    <ValidationError
                      field={name} // field — the name of the field for which to display errors (required)
                      prefix={field} // prefix — the human-friendly name of the field (optional, defaults to "This field")
                      errors={state.errors} // errors — the object containing validation errors (required)
                      className="text-sm text-red-600"
                    />
                  </label>
                )}
              {(type === "text" || type === "email" || type === "hidden") && (
                <input
                  type={type}
                  name={name}
                  id={id}
                  placeholder={placeholder}
                  required={!optional}
                  className="w-full rounded"
                  defaultValue={value ? value : undefined}
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
                          // required={!optional}
                          // ^^^required does not apply to the group of radio or
                          // checkbox inputs, it would apply to each one, so we
                          // ignore the optional prop because of the HTML5 spec
                          className={classNames(
                            type === "radio" ? "rounded-full" : "rounded",
                            "mr-1"
                          )}
                          value={option} // this will be passed on to the form
                          defaultChecked={
                            // check if this option is part of the selectedPlanState
                            // e.g. pre-select the "Residential" radio button
                            selectedPlanState &&
                            selectedPlanState
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
                      ? "text-gray-800 bg-gray-200 h-24" // Selected Plan
                      : "h-40" // other <textarea>s, e.g. Comments or Message
                  )}
                  disabled={
                    // gray out and disable the "Selected Plan", if any
                    name.toLocaleLowerCase().includes("selected plan")
                      ? true
                      : undefined
                  }
                  value={value ? value : ""}
                />
              )}
              {type === "submit" && (
                <button
                  className={classNames(
                    "flex-shrink-0 py-4 text-center",
                    color === "red" ? "btn-orange" : "",
                    "transition duration-500 btn"
                  )}
                  type="submit"
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
