import { Fragment } from "react"

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
      <div
        id="get-in-touch"
        className="flex flex-col justify-center w-full h-48 space-y-12 text-3xl text-gray-900 dark:text-gray-100 md:h-60 md:text-4xl md:space-y-16 lg:h-72 md:pb-16 lg:pb-24 xl:pb-0"
      >
        <p>Thanks for contacting us!</p>
        <p>We will be in touch shortly.</p>
      </div>
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      id="get-in-touch"
      className="space-y-2 text-gray-900 dark:text-gray-100"
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
          const id = field.replace(/\w/g, "") // id="" can't have whitespace
          type = type.toLocaleLowerCase() as ContactFieldType
          switch (type) {
            case "text" || "email":
              return (
                <Fragment key={field}>
                  <label htmlFor={id}>{field}</label>
                  <input type={type} name={name} id={id} required={!optional} />
                  <ValidationError
                    field={name} // field — the name of the field for which to display errors (required)
                    prefix={field} // prefix — the human-friendly name of the field (optional, defaults to "This field")
                    errors={state.errors} // errors — the object containing validation errors (required)
                  />
                </Fragment>
              )
            case "endpoint" || "submit" || "select" || "textarea":
              return <Fragment key={field} /> // not a real field
          }
          /*throw new Error(
            'An unknown type was found in a ContactField in <ContactForm>, please correct the Markdown file. Valid types are: "text" | "email" | "select" | "textarea" | "submit" | "endpoint"'
          )*/
          return <Fragment key={field} />
        }
      )}
      <label htmlFor="name">
        <strong>Name</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <input
        type="text"
        className="w-full h-10 pl-1 text-xl align-top border-2 border-black border-solid rounded-xl md:text-2xl dark:bg-gray-700"
        name="email"
        id="email"
        placeholder="Steven Terner, LLC"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">
        <strong>Email</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <input
        type="text"
        className="w-full h-10 pl-1 text-xl align-top border-2 border-black border-solid rounded-xl md:text-2xl dark:bg-gray-700"
        name="name"
        id="name"
        placeholder="hello@gmail.com"
        required
      />
      <label htmlFor="message">
        <strong>Message</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <input
        type="textarea"
        className="w-full pb-48 pl-1 text-lg align-top border-2 border-black border-solid md:text-3xl sm:text-2xl rounded-3xl h-60"
        placeholder="Let us know how we can help 💼"
        name="message"
        id="message"
        required
      />
      {/*padding-bottom for vertical alignment of placeholder to top*/}
      <button
        className="hover:border-gray-900 dark:hover:border-gray-100 px-4 py-2.5 mx-auto font-bold text-center rounded-lg text-base bg-green-dark border-transparent border-2 border-solid transition-all duration-700 text-gray-100 w-full"
        formAction="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  )
}
