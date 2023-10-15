import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Textarea } from 'evergreen-ui';




function Update() {

  const [values, setValues] = useState({
      title: '',
      body: ''
  })
  const {id} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(res => setValues(res.data))
      .catch(err => console.log(err))
  }, [id])

  const handleUpdate = (event) => {
      event.preventDefault();
      axios.put('https://jsonplaceholder.typicode.com/posts/'+id , values)
      .then(res => {
          alert("Data Updated Successfully!")
          navigate('/')
      })
  }

       


  return (
    <div  className='py-8 px-8 '> 
    <h1 className="mb-8 text-2xl  font-bold ">UPDATE POST</h1>
            <form onSubmit={handleUpdate}>
           
                
                
                <div >
                <input className="border-2 border-slate-300  w-full px-2 mb-4" type="text" name='title'
                   value= {values.title} onChange={e => setValues({...values, title: e.target.value})}/>
                </div>
                <div className='mb-8' >
                    <Textarea 
                   name="body" value ={values.body}
                      onChange={e => setValues({...values, body: e.target.value})}/>
                  
                </div><br />
                <button  className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                >Update</button>
            </form>
        </div>
    
  )
}

export default Update