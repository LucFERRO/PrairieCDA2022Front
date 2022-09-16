import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.js'
import { apiService } from '../../services/APIService.js'

export default function Customers() {

    const [customers, setCustomers] = useState([])

    const customer_id = 1

    useEffect(() => {apiService.get(`customers/${customer_id}`).then( response => setCustomers(response.data) )}, [])

    return (
      <>
      <Navbar />
      <h1 className='personnal-info'>About me</h1>
        {customers.map( (customer, index) => (
            <ul className='personnal-info' key={index}>
                <li>{customer.firstname}</li>
                <li>{customer.lastname}</li>
                <li>{customer.address}</li>
                <li>{customer.email}</li>
            </ul>
        ))}
      </>
    )
  }
  