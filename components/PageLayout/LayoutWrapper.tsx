import Footer from "@/components/PageLayout/Footer"
import Header from "@/components/PageLayout/Header"

const LayoutWrapper = ({ children }: { children?: any }) => {
  return (
    <div className="text-lg leading-5 text-black bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default LayoutWrapper
