import React from 'react'

export default function SelectByContinents() {
  return (
    <>
    <div>
        <label htmlFor="region-filter" className="visually-hidden">Filter by region</label>
        <select id="region-filter" className="form-select mb-3" style={{width: '250px'}} 
            aria-label="Filter by region">
            <option value="">The World</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
    </>
  )
}
