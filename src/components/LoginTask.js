import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/login'

export const LoginTask = () => {
/*
 const HandleSubmit =(event) => {
    event.preventDefault()
    console.log('this is submit')
 }   
*/

const [email, setEmail] = useState('')
const [password, setPassword] = useState('') 
const navigate = useNavigate()   

 const store = async (e) =>{
    e.preventDefault()
    await axios.post(endpoint,{email: email, password:password}).then(response => {
       localStorage.setItem("Token",response.data);
        window.location = '/show'
    }).catch(error => {
        this.setState
        ({
            error : true,
            errorMsj:error.response.data.Error
        })

})  // hasta aca
    
    navigate('/')
} 

/*
manejadorButton=()=>{
    let url= UrlLogin ;
        axios.post(url, this.state.form).then(response => {
                    localStorage.setItem("Token",response.data.api_token);
                    localStorage.setItem("rolid",response.data.role_id);
                    localStorage.setItem("departamentoid",response.data.iddepartamento);
                    response.data.role_id == 1 ? window.location = '/crudUser': window.location = '/crudObituario'
                }).catch(error => {
                    this.setState
                    ({
                        error : true,
                        errorMsj:error.response.data.Error
                    })
            
})        
}
*/


    return (
    <div>
        <h3>Login</h3>
        <form onSubmit={store}>
            <div>
                <input 
                    type="text"
                    value={email}
                    name ='Email'
                    placeholder='Email'
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div>
<               input 
                    type="password"
                    value={password}
                    name ='Password'
                    placeholder='Password'
                    onChange={(e)=> setPassword(e.target.value)}
                />
            
            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>

    </div>
  )
}

