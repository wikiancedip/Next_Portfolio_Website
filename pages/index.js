import { Fragment } from "react"
import About from "../components/Ui/About"
import Hero from "../components/Ui/Hero"
import Services from "../components/Ui/Services"
import Portfolio from "../components/Ui/Portfolio"
import Testimonials from "../components/Ui/Testimonials"
import Contact from "../components/Ui/Contact"



export default function Home() {
  return <Fragment>
    <Hero />
    <Services />
    <About />
    <Portfolio />
    <Testimonials />
    <Contact />
  </Fragment>
}
