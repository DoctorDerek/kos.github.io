import Footer from "@/components/PageLayout/Footer"
import Header from "@/components/PageLayout/Header"

const LayoutWrapper = ({ children }: { children?: any }) => {
  return (
    <>
      <Header />
      <div id="page-content">{children}</div>
      <Footer />
    </>
  )
}

export default LayoutWrapper
