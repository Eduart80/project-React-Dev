import React from 'react'

export default function Flag() {
  return (
    <>
    <div className="card_image h-100">
        <img className="card-img-top w-100 rounded-3" src="${country.flags.png}" alt="${country.name.common}"/>
    </div>
    <div className="card-body">
    <h5 className="card-title fs-4 fw-semibold">${country.name.common}</h5>
    <p className="card-text fs-8 text-body-secondary">Population: ${country.population.toLocaleString()}</p>
    <p className="card-text fs-8 text-body-secondary">Region: ${country.region}</p>
    <p className="card-text fs-8 text-body-secondary">Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
    </div>
    </>
  )
}
