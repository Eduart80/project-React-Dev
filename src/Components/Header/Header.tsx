import React from 'react'

export default function Header() {
  return (
    <>
    <header>
      <nav aria-label="Main navigation">
          <h1>Where in the world?</h1> 
          <button id="theme-toggle" aria-label="Toggle dark and light mode">
            <img src="../../images/moonDark.png" alt="moonLight" id="moon"/><span id="mode">Dark Mode</span>
          </button>
      </nav>
    </header>
    </>
  )
}
