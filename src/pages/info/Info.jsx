import './Info.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Info = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [nextPage, setNextPage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setNextPage(name !== '' && email !== '' && phoneNumber !== '')
  }, [name, email, phoneNumber])

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(!nextPage){
      if(name === '' ){
        setErrorMessage('This field is required')
      }else if(email === '' ){
        setErrorMessage('This field is required')
      }else if(phoneNumber === '' ){
        setErrorMessage('This field is required')
      }
    }
    
    if(nextPage){
      navigate('/plan')
    }
  }
  

  return (
    <div className='info'>
        <h2>Personal info</h2>
        <p>Please provide your name, email address and phone number.</p>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name 
            {name === '' && <span className='errorMessage-name'>{errorMessage}</span>}
          </label>
          <input
            type="text" 
            id='name' 
            name='name'
            value={name} 
            placeholder='Gguife' 
            onChange={(e) => setName(e.target.value)}
            style={{border: errorMessage && name === '' ? '1px solid red' : '1px solid hsl(229, 24%, 87%)'}}
          />
          
          <label htmlFor="email">
            Email Address
            {email === '' && <span className='errorMessage-email'>{errorMessage}</span>}
          </label>
          <input 
            type="email" 
            name='email' 
            id='email'
            value={email} 
            placeholder='gguife747@gmail.com' 
            onChange={(e) => setEmail(e.target.value)} 
            style={{border: errorMessage && email === '' ? '1px solid red' : '1px solid hsl(229, 24%, 87%)'}}
          />
          <label htmlFor="phone">
            Phone Number
            {phoneNumber === '' && <span className='errorMessage-phone'>{errorMessage}</span>}
          </label>
          <input 
            type="number" 
            name='phone' 
            id='phone' 
            value={phoneNumber}
            placeholder='+55 (99) 99999-9999' 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            style={{border: errorMessage && phoneNumber === '' ? '1px solid red' : '1px solid hsl(229, 24%, 87%)'}}
          />

            <button type='submit'>Next Step</button>
        </form>
    </div>
  )
}

export default Info