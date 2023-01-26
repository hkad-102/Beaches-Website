import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Select from './components/Select'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Select />
      <Carousel />
      <Footer />
    </div>
  )
}

export default App
