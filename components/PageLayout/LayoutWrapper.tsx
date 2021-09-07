import Footer from "@/components/PageLayout/Footer"
import Header from "@/components/PageLayout/Header"

const LayoutWrapper = ({ children }: { children?: any }) => {
  // <LayoutWrapper> is effectively the <body> tag as it occurs on every page,
  // but placing global styles here is clearer than in _app.tsx or document.tsx
  return (
    <div className="font-sans text-lg text-black bg-white">
      <Header useMaxWidth={true} />
      {children}
      <Footer />
    </div>
  )
}

export default LayoutWrapper
