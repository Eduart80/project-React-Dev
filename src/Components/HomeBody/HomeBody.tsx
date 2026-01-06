import { useEffect, useState } from 'react'
import { fetchALLData } from '../../API/apiFetch'
import Spinner from '../Spiner/Spinner'
import FlagDisplay from '../FlagDisplay/FlagDisplay'
import './style.css'
import SearchBar from '../SearchBar/SearchBar'
import SelectByContinents from '../SelectByContinents/SelectByContinents'

export default function HomePage() {
  const [countries, setCountries] = useState<any[]>([])
  const [filteredCountries, setFilteredCountries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContinent, setSelectedContinent] = useState('')

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchALLData()
      .then((data) => {
        if (!data || data.status === 404) {
          setError('No country data found.')
        } else {
          setCountries(data);
          setFilteredCountries(data);
        }
      })
      .catch(() => {
        setError('Failed to fetch country data.')
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    let filtered = countries;

    // Filter continents
    if (selectedContinent) {
      filtered = filtered.filter(country => 
        country.region === selectedContinent
      )
    }

    // Filter search
    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredCountries(filtered)
  }, [searchTerm, selectedContinent, countries])

  if (loading) return <Spinner />
  if (error) return <div style={{color: 'red', textAlign: 'center'}}>{error}</div>

  return (
    <>
    <div className='subNav'>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <SelectByContinents selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent}/>
    </div>
    <div id='countryPrev'>
      {filteredCountries.map((country, index)=>(
        <FlagDisplay key={country.name?.common || index} {...country}/>
      ))}
      {filteredCountries.length === 0 && <p>No countries found</p>}
    </div>
    </>
  );
}
