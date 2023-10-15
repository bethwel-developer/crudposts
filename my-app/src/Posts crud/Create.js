import React from 'react'

import axios from 'axios';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Textarea } from 'evergreen-ui';


const Create = () => {

 

  const [inputData, setInputData] = useState({
      title: '',
      body: ''
  })
  const navigate = useNavigate();

 

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('https://jsonplaceholder.typicode.com/posts', inputData)
      .then(res => {
        console.log(res)
          navigate('/')
      })
  }
  return (
    <div  className='py-8 px-8 '> 
     <h1 className="mb-8 text-2xl  font-bold ">CREATE POST</h1>
            <form onSubmit={handleSubmit}>
           
                
                
                <div>
                    <input placeholder='Enter post title' className="border-2 border-slate-300  w-full px-2 mb-4" type="text" name='title'  
                   onChange={e => setInputData({...inputData, title: e.target.value})}/>
                </div>
                <div className='mb-8' >
                    <Textarea placeholder='Enter post content'
name='body'
                      onChange={e => setInputData({...inputData, body: e.target.value})}/>
                  
                </div><br />
                <button onClick={handleSubmit} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                >Create post</button>
            </form>
        </div>
    
  )
}

export default Create
