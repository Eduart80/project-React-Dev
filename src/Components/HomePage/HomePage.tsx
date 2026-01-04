import React, { useEffect, useState } from 'react';
import { fetchALLData } from '../../API/apiFetch';
import Spinner from '../Spiner/Spinner';
import Flag from '../FlagCard/FlagCard';

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
      .catch((e) => {
        setError('Failed to fetch country data.')
      })
      .finally(() => setLoading(false))
  }, []);

  if (loading) return <Spinner />
  if (error) return <div style={{color: 'red', textAlign: 'center'}}>{error}</div>

  return (
    <div>
      <Flag countries={countries}/>
      HomePage ({countries.length} countries loaded)
    </div>
  );
}
