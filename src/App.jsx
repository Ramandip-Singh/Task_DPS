import About from "./components/about/About"
import BeyoundClassroom from "./components/beyond-classroom/BeyoundClassroom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Introduction from "./components/introduction/Introduction"
import KeyFacts from "./components/keyfacts/Keyfacts"
import NewsAndEvent from "./components/newandevent/NewsAndEvent"
import SchoolHighlights from "./components/school-highlights/SchoolHighlights"
import SportsAcademy from "./components/sports-academy/SportsAcademy"
import Testimonial from "./components/testimonial/Testimonial"
import Vision from "./components/vision/Vision"



function App() {
  

  return (
    <div className="flex flex-col min-h-[100vh] ">
      <Header/>
      <Introduction/>
       <KeyFacts/>
      <About/>
      <Vision/>
      <SchoolHighlights/>
      <SportsAcademy/>
      <BeyoundClassroom/>
       <NewsAndEvent/>
      <Testimonial/>
      <Footer/> 
    </div>
  )
}

export default App
