import React, { useEffect, useState } from 'react'
import type { CountryDetails } from '../../types/types'
import { useParams } from 'react-router-dom'
import { fetchOne } from '../../API/apiFetch'
import Spinner from '../Spiner/Spinner'
import BackButton from '../BacButton/BackButton'

export default function FlagCard() {
  const {countryName} = useParams<{countryName:string}>()
  const [country, setCountry]=useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(countryName){
      fetchOne(countryName)
      .then(data => setCountry(data[0]))
      .finally(()=> setLoading(false))
    }
  },[countryName])

  console.log("some:: "+country);
  
  if (loading) return <Spinner />
  if (!country) return <div>Country not found</div>
  
  return (
    <>
    <div className="card_image h-100">
        <img className="card-img-top w-100 rounded-3" src={country.flags.png}  alt={country.name.official}/>
    </div>
    <div className="card-body">
    <h5 className="card-title fs-4 fw-semibold">${country.name.common}</h5>
    <p className="card-text fs-8 text-body-secondary">Capital: {country.capital?.[0]}</p>
    <p className="card-text fs-8 text-body-secondary">Population: {country.population?.toLocaleString()}</p>
    <p className="card-text fs-8 text-body-secondary">Region: {country.region}</p>
    </div>
    <BackButton/>
    </>
  )
}
