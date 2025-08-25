import Footer from "@/components/layouts/home/Footer"
import Header from "@/components/layouts/home/Header"
import MainContent from "@/components/layouts/home/MainContent"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b  from-muted to-background py-4">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}
