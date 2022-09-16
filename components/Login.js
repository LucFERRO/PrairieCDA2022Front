import React from 'react'
import { apiService } from '../services/APIService'

export default function Login() {
    

    const HandleLogin = (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        apiService.login(data).then(response => console.log(response.data))
    }



  return (
    <form action="" method="get" onSubmit={HandleLogin} class="form-login">
        <div class="form-login">
            <label for="email">Email address: </label>
            <input type="email" name="email" id="email" required />
        </div>
        <div class="form-login">
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" required />
        </div>
        <div class="form-login">
            <input id="button-login" type="submit" value="Login" />
        </div>
    </form>
  )
}
