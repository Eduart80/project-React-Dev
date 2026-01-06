import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchOne, fetchByCode } from '../../API/apiFetch'
import Spinner from '../Spiner/Spinner'
import BackButton from '../BacButton/BackButton'
import './flagCard.css'

export default function FlagCard() {
  const {countryName, countryCode} = useParams<{countryName?:string, countryCode?:string}>()
  const [country, setCountry]=useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    setCountry(null)
    
    if(countryName){
      fetchOne(countryName)
      .then(data => setCountry(data[0]))
      .finally(()=> setLoading(false))
    } else if(countryCode){
      fetchByCode(countryCode)
      .then(data => {
        let result
        if(Array.isArray(data)) result = data[0]
        else result = data
        setCountry(result)
      })
      .finally(()=> setLoading(false))
    }
  },[countryName, countryCode])
  
  if (loading) return <Spinner />
  if (!country) return <div>Country not found</div>
  
  return (
    <>
    <div className="card_image h-100" style={{width:'50%', margin:'auto'}}>
        <img className="card-img-top w-100 rounded-3" src={country.flags.png}  alt={country.name.official}/>
    </div>
      <div className="card-body" style={{marginTop:'10px'}}>
      <h5 className="card-title fs-4 fw-semibold">{country.name.common}</h5>
      <p className="card-text fs-8 text-body-secondary">Capital: {country.capital?.[0]}</p>
      <p className="card-text fs-8 text-body-secondary">Population: {country.population?.toLocaleString()}</p>
      <p className="card-text fs-8 text-body-secondary">Region: {country.region}</p>
      <p className="card-text fs-8 text-body-secondary">
        Languages: {country.languages && Object.values(country.languages).join(', ')}
      </p>
      <div className="card-text fs-8 text-body-secondary">
        Borders: {country.borders && country.borders.length > 0 ? (
          country.borders.map((border: string) => (
            <Link key={border} to={`/country/code/${border}`}>
              <button className='btn btn-info btn-sm m-1'>{border}</button>
            </Link>
          ))
        ) : (
          <span>No borders</span>
        )}
      </div>
    </div>
    <hr/>
    <BackButton/>
    </>
  )
}
// https://restcountries.com/v3.1/name/italy/?fullText=true
