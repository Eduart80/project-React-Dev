import React, { useState } from 'react'
import HomePage from '../../Components/HomePage/HomePage'
import Header from '../../Components/Header/Header'

export default function Home() {
  const [spinner, setSpinner]=useState(true)
  return (
    <>
    {}
    <Header/>
    <HomePage/>
    </>
  )
}
