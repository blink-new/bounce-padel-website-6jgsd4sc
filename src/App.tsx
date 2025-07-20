import { useEffect } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Trainingen from './components/sections/Trainingen'
import Blog from './components/sections/Blog'
import Shop from './components/sections/Shop'
import OverMij from './components/sections/OverMij'
import Boeken from './components/sections/Boeken'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Trainingen />
        <Blog />
        <Shop />
        <OverMij />
        <Boeken />
      </main>
      <Footer />
    </div>
  )
}

export default App