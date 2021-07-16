import Footer from "@/components/PageLayout/Footer"
import Header from "@/components/PageLayout/Header"

const LayoutWrapper = ({ children }: { children?: any }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutWrapper
