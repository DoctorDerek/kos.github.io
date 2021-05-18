import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
