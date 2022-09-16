import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.js'
import { apiService } from '../../services/APIService.js'

export default function Visits() {

    const [visits, setVisits] = useState([])

    const customer_id = 1

    useEffect(() => {apiService.get(`visits`).then( response => {setVisits(response.data), console.log(response.data) } )}, [])

    return (
      <>
      <Navbar />
      <h1 className='personnal-info'>My visits: WORK IN PROGRESS</h1>
        {visits.map( (visit, index) => (
            <ul className='personnal-info' key={index}>
                <li>{`Visit N°${index+1}`}</li>
                <li>Date: {visit.date}</li>
                <li>Animal: {visit.animal_id}</li>
                <li>Vaccine: {visit.vaccine ? 'Yes' : 'No'}</li>
            </ul>
        ))}
      </>
    )
  }
  