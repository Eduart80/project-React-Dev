import React from 'react'

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
    <div>
        <label 
            htmlFor="search-input" 
            className="visually-hidden">Search for a country</label>
            
        <input 
            id="search-input" 
            type="text" 
            name="search" 
            placeholder="Search..." 
            className="search-input" 
            aria-label="Search for a country"
            value={searchTerm}
            onChange={handleChange} />
    </div>
    </>
  )
}
