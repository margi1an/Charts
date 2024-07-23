import React, { useEffect, useState } from 'react'
import Form from './Components/Form'
import Loading from './Components/Loading';

function App() {
  const [datas , setData] = useState()
  const [loading, setLoading] = useState(true);

  const getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
  useEffect(() => {
    setLoading(false)
  } , [])
  
  if (loading) {
    return <Loading />;
  }
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <div>
        <Form getData={getData}></Form>
      </div>
    </div>
  )
}

export default App