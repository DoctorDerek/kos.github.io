export default function Policies() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 asideColumn">
          <h4>Policies</h4>
          <ul className="service-list">
            <li>
              <a href="/aup/">Acceptable Use Policy</a>
            </li>
            <li>
              <a href="/pp/">Privacy Policy</a>
            </li>
            <li>
              <a href="/tsp/">Technical Support Policy</a>
            </li>
            <li>
              <a href="/wpp/">Website Privacy Policy</a>
            </li>
            <li>
              <a href="/resolution/">Resolution Services</a>
            </li>
          </ul>
        </div>
        <div className="divider-lg visible-xs"></div>
        <div className="col-md-8 col-lg-9">
          <div>
            <img
              src="/assets/images/news/img_news.jpg"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="divider-xl"></div>

          <div className="divider-line-sm"></div>
        </div>
      </div>
    </div>
  )
}
