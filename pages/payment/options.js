import React from "react"

export default function PaymentOptions() {
  return (
    <div className="container">
      <h1 className="text-center decor color">Payment Options</h1>

      <p
        className="text-center font18"
        style="margin-top: 0px; margin-bottom: 26px; font-size: 18px; line-height: 26px; text-align: center; color: #000000; font-family: 'Open Sans', sans-serif; background-color: #ffffff;"
      >
        <span style="color: #c70000; font-weight: bold;">
          Auto Monthly Credit Card
        </span>
        <br />
        We accept Visa and Mastercard.
      </p>
      <p
        className="text-center font18"
        style="margin-top: 0px; margin-bottom: 26px; font-size: 18px; line-height: 26px; text-align: center; color: #000000; font-family: 'Open Sans', sans-serif; background-color: #ffffff;"
      >
        <span style="color: #c70000; font-weight: bold;">
          Auto Monthly Bank Debit
        </span>
        <br />
        Pay by monthly withdrawal from your chequing account.
      </p>
      <p
        className="text-center font18"
        style="margin-top: 0px; margin-bottom: 26px; font-size: 18px; line-height: 26px; text-align: center; color: #000000; font-family: 'Open Sans', sans-serif; background-color: #ffffff;"
      >
        <span style="color: #c70000; font-weight: bold;">Payment Dates</span>
        <br />
        Payments will be made monthly, on either the 1st, 5th, 15th, or 25th day
        of each month. Exact payment to be determined at sign up.
      </p>
      <p>&nbsp;</p>
    </div>
  )
}
