import React from 'react'

export default function Flag() {
  return (
    <>
    <div className="card_image h-100">
        <img className="card-img-top w-100 rounded-3" src='' alt="${country.name.common}"/>
    </div>
    <div className="card-body">
    <h5 className="card-title fs-4 fw-semibold">${}</h5>
    <p className="card-text fs-8 text-body-secondary">Population: ${}</p>
    <p className="card-text fs-8 text-body-secondary">Region: ${}</p>
    <p className="card-text fs-8 text-body-secondary">Capital: ${}</p>
    </div>
    </>
  )
}
