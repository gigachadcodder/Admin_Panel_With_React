import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-continer'>
      <Header openSidebar = {OpenSidebar}/>
      <Sidebar openSidebarToggle = {openSidebarToggle} openSidebar = {OpenSidebar} />
      <Home/>
    </div>
  )
}

export default App
