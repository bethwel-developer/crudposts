import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams} from 'react-router-dom'

function Read () {
     const [Data, setdata] = useState([])
    const {id} = useParams();

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(res => setdata(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className='  justify-around px-32 py-24 bg-white b'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Title: {Data.title}</h5>
            <p className='mb-24 font-normal text-xl text-gray-700 dark:text-gray-400'> {Data.body}</p>
            <button className='focus:outline-none mr-4 ml-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' >
                              <Link to={`/update/${Data.id}`}>Edit</Link></button>

           <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
            <Link to="/">Back</Link></button> 
            </div>
    
  )
}

export default Read
