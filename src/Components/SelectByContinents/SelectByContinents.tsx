import React from 'react'

interface SelectByContinentsProps {
  selectedContinent: string;
  setSelectedContinent: (continent: string) => void;
}

export default function SelectByContinents({ selectedContinent, setSelectedContinent }: SelectByContinentsProps) {
 
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContinent(e.target.value);
  };

  return (
    <>
    <div>
        <label htmlFor="region-filter" className="visually-hidden">Filter by region</label>
        <select 
            id="region-filter" 
            className="form-select mb-3" 
            style={{width: '250px'}} 
            aria-label="Filter by region"
            value={selectedContinent}
            onChange={handleChange}>
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
