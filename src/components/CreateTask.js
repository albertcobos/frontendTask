import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/task'

export const CreateTask = () => {
   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [date, setDate] = useState('')
   const [state, setState] = useState('')
   const navigate = useNavigate() 

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(endpoint,{title: title, content:content , date:date, state:state})
        navigate('/')
    }
    return (
    <div>
        <h3>Create Task</h3>
        <form onSubmit={store}>
            <div className='form-label'>Title
                <input 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    type="text"
                    className='form-control'>
                </input>
            </div>

            <div className='form-label'>Description
                <input 
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    type="text"
                    className='form-control'>
                </input>
            </div>

            <div className='form-label'>Delivery date
                <input 
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                    type="date"
                    className='form-control'>
                </input>
            </div>

            <div className='form-label'>State
                <input 
                    value={state}
                    onChange={(e)=> setState(e.target.value)}
                    type="text"
                    className='form-control'>
                </input>
            </div>

            <button type='submit' className='btn btn-primary'>Save</button>
        </form>

    </div>
  )
}

