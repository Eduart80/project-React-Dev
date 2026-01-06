import { useEffect, useState } from 'react'
import { fetchALLData } from '../../API/apiFetch'
import Spinner from '../Spiner/Spinner'
import FlagDisplay from '../FlagDisplay/FlagDisplay'
import './style.css'
import SearchBar from '../SearchBar/SearchBar'
import SelectByContinents from '../SelectByContinents/SelectByContinents'

export default function HomePage() {
  const [countries, setCountries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchALLData()
      .then((data) => {
        if (!data || data.status === 404) {
          setError('No country data found.')
        } else {
          setCountries(data);
        }
      })
      .catch(() => {
        setError('Failed to fetch country data.')
      })
      .finally(() => setLoading(false))
  }, []);

  if (loading) return <Spinner />
  if (error) return <div style={{color: 'red', textAlign: 'center'}}>{error}</div>

  return (
    <>
    <div className='subNav'>
    <SearchBar/><SelectByContinents/>
    </div>
    <div id='countryPrev'>
      {countries.map((country, index)=>(
        <FlagDisplay key={country.name?.common || index} {...country}/>
      ))}
      HomePage ({countries.length} countries loaded)
    </div>
    </>
  );
}
