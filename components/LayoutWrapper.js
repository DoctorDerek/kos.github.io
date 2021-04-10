import Header from "./Header"
import Footer from "./Footer"

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div id="page-content">{children}</div>
      <Footer />
    </>
  )
}

export default LayoutWrapper
