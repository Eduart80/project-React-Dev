import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav >
        <ul style={{backgroundColor:'transparent'}}>
            <li><NavLink 
            style={({ isActive }) => ({ 
                color: isActive ? 'green' : 'lightgreen' })} 
                to={'/'}>Home</NavLink>
            </li>
            <li><NavLink 
            style={({ isActive }) => ({ 
                color: isActive ? 'green' : 'lightgreen' })}  
                to={'/flagInformation'}>Flag</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}
