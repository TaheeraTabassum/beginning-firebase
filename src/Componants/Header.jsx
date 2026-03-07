import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='font-bold flex gap-4 text-teal-400 justify-center'>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      <NavLink to="/signin">SIGN-IN</NavLink>
    </div>
  )
}
