import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [showUserName,setshowUserName] = useState(false)
  const [showEmail,setshowEmail] = useState(false)
  const [showPassword,setshowPassword] = useState(false)
  const [showBind,setshowBind] = useState(false)
  const [UserName,setUserName] = useState('')
  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const requried = (e) => {
    e.preventDefault()
    if(UserName.length===0){
      setshowUserName(true)
    }if(Email.length===0){
      setshowEmail(true)
    }if(Password.length===0){ 
      setshowPassword(true)
    }if(Password.length<8){
      setshowBind(true)
    }if(Password.length===0){
      setshowBind(false)
    }
  }
  return (
    <div className='container'>
        <form className='Login'>
           <h1>Login</h1>
           <div className='underline'></div>
           <div className='field'>
               <h4 className='title'>UserName</h4>
               <input type='text' placeholder='UserName' onChange={(e)=>setUserName(e.target.value)}/>
               <br/>
               <p className={showUserName?'required required-UserName':'required'}> UserName is required</p>
           </div>
           <div className='field'>
               <h4 className='title'>Email</h4>
               <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
               <br/>
               <p className={showEmail?'required required-Email':'required'}> Email is required</p>
           </div>
           <div className='field'>
               <h4 className='title'>Password</h4>
               <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
               <br/>
               <p className={showPassword?'required required-Password':'required'}> Password is required</p>
               <br/>
               <p className={showBind?'required required-Bind':'required'}> The password must be more than 8 characters </p>
           </div>
           <button className='Submit' onClick={requried}>Submit</button>
        </form>
    </div>
  )
}

export default App
