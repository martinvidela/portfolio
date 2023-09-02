import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { Nav } from './Components/Nav'
import { Projects } from './views/Projects/Projects'

function App() {

  return (
  <div className='app-container'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  </div>
  )
}

export default App
