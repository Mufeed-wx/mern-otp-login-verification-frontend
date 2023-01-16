import React, { useState } from 'react'
import axios from "axios"
function Mobile() {
  const [number, serNumber] = useState('')
  const [otp, setOtp] = useState("")
  
  const handleSubmit = () => {
    axios.post("http://localhost:8000/mobile", {number}).then(response => {
      console.log(response);
    })
  }
  const handleChange = (event) => {
    serNumber(event.target.value)
  }

  const onSubmit = () => {
    axios.post("http://localhost:8000/otp", {otp}).then(response => {
      console.log(response);
    })
  }
  const onChange = (event) => {
    setOtp(event.target.value)
  }

  return (
    <div>
      <input type="number" onChange={handleChange} />
      <button type='button' onClick={handleSubmit}>submit number</button>
      <input type="number" onChange={onChange} />
      <button type='button' onClick={onSubmit}>submit number</button>
    </div>
    
  )
}

export default Mobile