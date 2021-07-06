import Footer from "@/components/Footer"
import Header from "@/components/Header"

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
