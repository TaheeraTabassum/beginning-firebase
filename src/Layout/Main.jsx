import React from 'react'
import Header from '../Componants/Header'
import { Outlet } from 'react-router'

export default function Main() {
  return (
    <div>
     <Header></Header>
     <Outlet></Outlet>
    </div>
  
  )
}
