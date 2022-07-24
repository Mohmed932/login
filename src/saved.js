import React, { useEffect, useState } from 'react'


const axios = require("axios");
const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/actors/get-all-videos',
  params: {nconst: 'nm0001667'},
  headers: {
    'X-RapidAPI-Key': 'c11d223f3amsh3b4b6ec91a12073p1b9c73jsn8c5a8d4b931e',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};
const App = () => {
  const [data,setdata] = useState([])
  useEffect(()=>{
    axios.request(options).then(function (response) {
      console.log(response.data);
      setdata(response.data.resource);
    }).catch(function (error) {
      console.error(error);
    });
  },[])
  return (
    <div className='App'>  
       
    </div>
  )
}

export default App
