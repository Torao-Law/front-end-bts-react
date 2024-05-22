import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiConfig } from '../config/apiConfig'

const useRegister = () => {
  const navigate = useNavigate()
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    username: ""
  }) 

  const handleChangeRegister = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value
    })
  } 

  const handleRegister = async (e) => {
    try {
      e.preventDefault()
      
      await ApiConfig.post("/register", formRegister)
      navigate("/auth/login")
    } catch (err) {
      throw err
    }
  }

  return {
    formRegister,
    handleChangeRegister,
    handleRegister
  }
}

export default useRegister