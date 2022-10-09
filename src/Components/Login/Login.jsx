import React from 'react'
import './login.css'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    const setSessionStorage = () => {
      sessionStorage.setItem('login', JSON.stringify(loginWithRedirect))
    }

  return <button onClick={() => {loginWithRedirect(); setSessionStorage()}} className="btn-login">Login</button>
}