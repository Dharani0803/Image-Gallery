import Navbar from "./components/Navbar"
import Description from "./components/Description"
import Nature from "./components/Nature"
import Pets from "./components/Pets"
import Toys from "./components/Toys"
import Motivation from "./components/Motivation"
import Aboutus from "./components/Aboutus"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer"

function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Description></Description>
      <Nature></Nature>
      <Pets></Pets>
      <Toys></Toys>
      <Motivation></Motivation>
      <Aboutus></Aboutus>
      <Contactus></Contactus>
      <Footer></Footer>
    </div>
  )
}

export default App