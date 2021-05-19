import { InternalTemplate } from "@/components/InternalTemplate"

export default function DomainRegistration(): JSX.Element {
  const title = (
    <>
      Registering a <span className="text-red-brand">Domain</span>
    </>
  )
  // "Registering a Domain"
  const slug = "domain/registration"
  // "domain/registration"

  return (
    <InternalTemplate title={title} slug={slug}>
      <DomainRegistrationContent />
    </InternalTemplate>
  )
}

function DomainRegistrationContent() {
  return (
    <div id="page-content">
      {/* Block */}
      <div className="block">
        <div className="container">
          <p
            className="text-center font18"
            style={{
              marginTop: "0px",
              marginBottom: "26px",
              fontSize: "18px",
              lineHeight: "26px",
              textAlign: "center",
              color: "#000000",
              fontFamily: '"Open Sans", sans-serif',
              backgroundColor: "#ffffff",
            }}
          >
            <span style={{ color: "#c70000", fontWeight: "bold" }}>
              Looking for a presence on the World Wide Web? Get started with
              yourname.com!
            </span>
            <br />
            Domain names must be renewed yearly and are in Canadian dollars.
          </p>
          <p
            style={{
              marginTop: "0px",
              marginBottom: "22px",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#000000",
              fontFamily: '"Open Sans", sans-serif',
              backgroundColor: "#ffffff",
            }}
          >
            <span style={{ color: "#c70000", fontWeight: "bold" }}>•</span>
            &nbsp;
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              .ca – $40
            </span>
            <br />
            <span style={{ color: "#c70000", fontWeight: "bold" }}>•</span>
            &nbsp;
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              .com .net .org – $30
            </span>
          </p>
          <p
            className="text-center font18"
            style={{
              marginTop: "0px",
              marginBottom: "26px",
              fontSize: "18px",
              lineHeight: "26px",
              textAlign: "center",
              color: "#000000",
              fontFamily: '"Open Sans", sans-serif',
              backgroundColor: "#ffffff",
            }}
          >
            Please&nbsp;
            <a
              style={{ color: "#005395" }}
              href="https://www.kos.net/contact.php"
            >
              contact us
            </a>
            &nbsp;for your domain registrations.
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
      {/* //Block */}
    </div>
  )
}
