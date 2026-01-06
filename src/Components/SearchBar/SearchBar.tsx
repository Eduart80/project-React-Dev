import React from 'react'

export default function SearchBar() {
  return (
    <>
    <div>
        <label 
            htmlFor="search-input" 
            className="visually-hidden">Search for a country</label>
            
        <input id="search-input" 
            type="text" 
            name="search" 
            placeholder="Search..." 
            className="search-input" 
            aria-label="Search for a country" />
    </div>
    </>
  )
}
