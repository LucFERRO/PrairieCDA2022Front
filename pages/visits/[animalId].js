import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.js'
import { apiService } from '../../services/APIService.js'
import { useRouter } from 'next/router'

export default function VisitsOfGivenAnimal() {

    const router = useRouter()

    const [visits, setVisits] = useState([])
    const [currentAnimal, setCurrentAnimal] = useState([])

    const animal_id = router.query.animalId
    const today = new Date
    // console.log(today.toLocaleDateString('fr'))
    
    // useEffect(() => {apiService.get(`animals/${animal_id}/`).then( response => setCurrentAnimal(response.data[0]) )}, [])
    // useEffect(() => {apiService.get(`visits/animal/${animal_id}`).then( response => setVisits(response.data) )}, [])

    useEffect(()=>{
        apiService.get(`animals/${animal_id}/`).then( response => {console.log(response.data),setCurrentAnimal(response.data[0])} )
        apiService.get(`visits/animal/${animal_id}`).then( response => setVisits(response.data) )
    },[])


    let dogOrCat = currentAnimal.specie == 'dog' ? '🐶' : '🐱' 

    console.log(visits)

    let dateFormatedVisits = []
    visits.forEach(visit => {
        visit.date = visit.date.substring(0,10)
        let newVisit = new Date(visit.date)
        visit.date = newVisit.toLocaleDateString('en-US')
        dateFormatedVisits.push(newVisit)})

    useEffect(() => setVisits(dateFormatedVisits), [])

    return (
      <>
      <Navbar />
      <h1 className='personnal-info'>{`Visits of ${currentAnimal.name} ${dogOrCat}:`}</h1>
        {visits.map( (visit, index) => (
            <ul className='personnal-info' key={index}>
                <li>Date: {visit.date}</li>
                <li>{typeof(visit.date)}</li>
                <li>{today>visit.date ? 'oui' : 'non'}</li>
                <li>Vaccine: {visit.vaccine ? 'Yes' : 'No'}</li>
            </ul>
        ))}
      </>
    )
  }
  