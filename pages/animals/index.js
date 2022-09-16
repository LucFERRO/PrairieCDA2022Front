import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.js'
import { apiService } from '../../services/APIService.js'
import Link from 'next/link'

export default function Animals() {

    const [animals, setAnimals] = useState([])

    const customer_id = 1

    useEffect(() => {apiService.get(`customers/${customer_id}/animals`).then( response => setAnimals(response.data) )}, [])

    return (
      <>
      <Navbar />
      <h1 className='personnal-info'>My dear animals:</h1>
        {animals.map( (animal, index) => (
            <ul className='personnal-info' key={index}>
                <li>{`Animal N°${animal.id}`}</li>
                <li><Link href={`/visits/${animal.id}`}>{`Name: ${animal.name}`}</Link></li>
                <li>{`Specie: ${animal.specie}`}</li>
                <li>{`Race: ${animal.race}`}</li>
                <li>{`Birthdate: ${animal.birthdate}`}</li>
            </ul>
        ))}
      </>
    )
  }
  