import React from 'react'

import { Textarea } from 'evergreen-ui';


const Create = ({onAdd}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value,e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
}
  
  return (
    <div  className='py-8 px-8 '> 
     <h1 className="mb-8 text-2xl  font-bold ">CREATE POST</h1>
            <form onSubmit={handleSubmit}>
           
                
                
                <div>
                    <input placeholder='Enter post title' className="border-2 border-slate-300  w-full px-2 mb-4 py-4" 
                    type="text" 
                    name='title' 
                   />
                </div>
                <div className='mb-8' >
                    <Textarea className=' text-4xl' placeholder='Enter post content'
                      name='body'
                     />
                  
                </div><br />
                <button className=' text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
               onSubmit={handleSubmit} >Create post</button>
            </form>
        </div>
    
  )
}

export default Create
