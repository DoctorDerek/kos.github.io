import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("moqyjpyk")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <strong>Name</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <input
        type="text"
        className="w-full h-10 pl-1 align-top border-2 border-black border-solid rounded-xl"
        name="email"
        id="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">
        <strong>Email</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <input
        type="text"
        className="w-full h-10 pl-1 align-top border-2 border-black border-solid rounded-xl"
        name="name"
        id="name"
      />
      <label htmlFor="message">
        <strong>Name</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <input
        type="textarea"
        className="w-full pb-48 pl-1 align-top border-2 border-black border-solid rounded-xl h-60"
        placeholder="Let me know how I can help"
        name="message"
        id="message"
      />
      {/*padding-bottom for vertical alignment of placeholder to top*/}
    </form>
  )
}
