import React from 'react'
import Banner from './Banner/Banner'
import Componant from './comonant/Componant'
import Benifit from '../Benifit/Benifit'
import Services from './Services/Services'
import Client from './Client/Client'

function Homepage() {
  return (
    <>
        <Banner />
        <Componant />
        <Benifit />
        <Services />
        <Client />
    </>
  )
}

export default Homepage