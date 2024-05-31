
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Create from './Create'

function Home() {
  // fetch all posts
    const [users, setUsers] = useState([])
    useEffect(()=> {
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => setUsers(res.data))
          .catch(err => console.log(err))
    }, [])
  

 //delete post
    function handleDelete (id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      if (res.status !== 200) {
        return;
      } else {
        setUsers(
          users.filter((data) => {
            return data.id !== id;
          })
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });

    }

  
  
//add post
    const onAdd = async (title, body) => {

      await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            body: body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.status !== 201) {
            return;
          } else {
            return res.json();
          }

        })
        .then((data) => {
          setUsers((users) => [...users, data]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  
  return (
    <div className='container ml-8'>
        <h2 className='mb-3 mt-4 font-bold text-2xl text-center'>CRUD APPLICATION WITH JSONPLACEHOLDER</h2>
        <Create onAdd = {onAdd}/>
       
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 '>
                <tr className='border-b bg-gray-50 font-bold'>
                      <th scope="col" className="px-20 font-bold py-3">title</th>
                      <th scope="col" className="px-4 py-3">Body</th>
                      <th  scope="col" className="px-36 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
              
                {users.map((d, i)=> (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={i}>
                          <td className="px-20 py-4 font-medium text-gray-900  dark:text-white" >{d.title}</td>
                          <td className="px-4 py-0 font-medium text-gray-900  dark:text-white">{d.body}</td>
                          <td>
                          <Link to={`/read/${d.id}`}>Read</Link>
                              <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-8 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' 
                              onClick={e => handleDelete(d.id)}>delete</button>
                          </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )

                }
  


export default Home
