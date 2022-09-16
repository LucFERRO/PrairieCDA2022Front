import axios from 'axios'

export default function test() {

    axios.get('http://localhost:3000/api/customers')
    .then(response => {
        console.log(response.data)
    })

    return <p>hello</p>
}