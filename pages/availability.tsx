export default function Availability() {
  return (
    <div className="container">
      <h1 className="text-center decor color">Availability Tool</h1>
      <div>
        <form
          action="http://www.kos.net/dslavail-check.php"
          method="post"
          name="dslcheck"
        >
          <input type="hidden" name="minidslc" value="1" />
          <input type="hidden" name="docheck" value="1" />
          <div className="price-cell">
            <label>
              <strong>
                Enter your Postal Code to check which of our{" "}
                <span>Internet packages</span> are available in your area:
              </strong>
            </label>
            <div>
              <input
                type="text"
                placeholder="K7K 5W7"
                name="postalcode"
                maxLength={7}
                size={7}
              />
              <input type="submit" value="Check" name="sub" />
            </div>
          </div>
        </form>
      </div>

      <iframe
        frameBorder="0"
        height="250"
        width="80%"
        scrolling="no"
        src="../../dslavail/dslavail.php"
        title="Postal Code Search"
      ></iframe>
      <div className="divider"></div>
    </div>
  )
}
