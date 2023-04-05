import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
 
export const ShowTasks = () => {
    const [ tasks, setTasks] = useState( [] )
    useEffect( ()=> {
        getAllTasks() 
    }, []) 

    const getAllTasks =async() =>{
      const response = await axios.get('http://localhost:8000/api/tasks')
      setTasks(response.data)
      console.log(response.data)
    }

    const endTask=async(id) =>{
      const url =`${endpoint}/endTask/${id}`
      const body = {
        state: 'End'
      };
    await axios.put(url, body)
      .then(function (response) {
      })
      .catch(function (error) {
      });
      getAllTasks()
    }

    const deleteTask=async(id) =>{
      await axios.delete(`${endpoint}/task/${id}`)
      getAllTasks()
    }
      return (
      <div>
          <div className='d-grid gap-2'>
              <Link to="/create" className='btn btn-success btn-lg mt-2 text-white'></Link>
          </div>
          <table className='table table-striped'>
              <thead className='bg-primary text-white'> 
                  <tr>
                      <th>Task</th>
                      <th>Description</th>
                      <th>Delivery Date</th>
                      <th>State</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                { tasks.map ((task) =>(
                  <tr key={task.id}>
                      <td> {task.title} </td>
                      <td> {task.content} </td>
                      <td> {task.date} </td>
                      <td> {task.state} </td>
                      <td>
                      
                      <button onClick={ ()=>endTask(task.id)} className='btn btn-primary'> End </button>
                      <Link to={'/edit/${task.id}'} className='btn btn-secondary'>Edit</Link>
                      <button onClick={ ()=>deleteTask(task.id)} className='btn btn-danger'> Delete </button>
                      </td>
                  </tr>
                ))}
              </tbody>
          </table>    
      </div>
    )
}
