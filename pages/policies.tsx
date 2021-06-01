import Link from "@/components/Link"
export default function Policies() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 asideColumn">
          <h4>Policies</h4>
          <ul className="service-list">
            <li>
              <Link href="/aup/">Acceptable Use Policy</Link>
            </li>
            <li>
              <Link href="/pp/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/tsp/">Technical Support Policy</Link>
            </li>
            <li>
              <Link href="/wpp/">Website Privacy Policy</Link>
            </li>
            <li>
              <Link href="/resolution/">Resolution Services</Link>
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
