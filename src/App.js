import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import Profile from './Pages/Profile'
import Projects from './Pages/Projects'
import AboutMe from './Pages/AboutMe'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path='/portfolio' element={<Profile />} />
        <Route exact path='/aboutme' element={<AboutMe />} />
        <Route exact path='/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
