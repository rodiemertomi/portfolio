import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import Profile from './Pages/Profile'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Profile />} />
        <Route exact path='/aboutme' element={<AboutMe />} />
        <Route exact path='/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
