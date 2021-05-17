import { InternalTemplate } from "@/components/InternalTemplate"

export default function PaymentOptions(): JSX.Element {
  const title = (
    <>
      <span style={{ color: "#A80532" }}>Payment</span> Options
    </>
  )
  // "Payment Options"
  const slug = "payment/options"
  // "payment/options"

  return (
    <InternalTemplate title={title} slug={slug}>
      <PaymentOptionsContent />
    </InternalTemplate>
  )
}

function PaymentOptionsContent() {
  return (
    <div className="container">
      <p className="text-center font18" style={undefined}>
        <span style={undefined}>Auto Monthly Credit Card</span>
        <br />
        We accept Visa and Mastercard.
      </p>
      <p className="text-center font18" style={undefined}>
        <span style={undefined}>Auto Monthly Bank Debit</span>
        <br />
        Pay by monthly withdrawal from your chequing account.
      </p>
      <p className="text-center font18" style={undefined}>
        <span style={undefined}>Payment Dates</span>
        <br />
        Payments will be made monthly, on either the 1st, 5th, 15th, or 25th day
        of each month. Exact payment to be determined at sign up.
      </p>
      <p>&nbsp;</p>
    </div>
  )
}
