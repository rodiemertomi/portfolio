import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import Profile from './Pages/Profile'
import Projects from './Pages/Projects'
import AboutMe2 from './Pages/AboutMe2'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path='/portfolio' element={<Profile />} />
        <Route exact path='/aboutme' element={<AboutMe2 />} />
        <Route exact path='/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
