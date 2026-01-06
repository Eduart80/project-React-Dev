import React from 'react'
import './flags.css'

import type { Country } from '../../types/types'
import { Link } from 'react-router-dom'

export default function FlagHome(props: Country) {
  return (
    <>
    <Link to={`/country/${props.name.common}`} className="text-decoration-none">
    <div className="card_image h-100">
      <img className="card-img-top w-100 rounded-3" src={props.flags.png}  alt={props.name.official}/>
      <h5 className="card-title fs-4 fw-semibold">{props.name.official}</h5>
    </div>
    </Link>
    </>
  )
}
