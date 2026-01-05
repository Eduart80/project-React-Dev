import React from 'react'

import type { Country } from '../../types/types'

export default function FlagHome(props: Country) {
  return (
    <>
    <div className="card_image h-100">
        <img className="card-img-top w-100 rounded-3" src={props.flags.png}  alt={props.name.official}/>
    </div>
    <div className="card-body">
    <h5 className="card-title fs-4 fw-semibold">{props.name.official}</h5>
    </div>
    </>
  )
}
