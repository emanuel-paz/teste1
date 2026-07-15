import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TrajectoryTimeline from './components/TrajectoryTimeline'
import Portfolio from './components/Portfolio'
import FeaturedProjects from './components/FeaturedProjects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <TrajectoryTimeline />
      <Portfolio />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Skills />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
