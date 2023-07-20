import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, } from 'react-router-dom'
import { Contact } from './component/Contact'
import { About } from './component/About'
import { Navbar } from './component/Navbar'
import './index.css'
import { Service } from './component/Service'
import { Home } from './component/Home'



export const App = () => {


  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' Component={() => <Home name="Home" />} />
        <Route exact path='/about' Component={() => <About name="AboutUs" />} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/service' Component={() => <Service name="Service" />} />

      </Routes>

    </>
  )
}

