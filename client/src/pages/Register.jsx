import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        //prevents from automatic refresh of page
        e.preventDefault()
        const {name, email, password} = data
        try{
            const{data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error){
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login successful!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input type='text' placeholder='Name...'
                    // Sets the input field value to the current value of data.name
                    value={data.name}
                    // Updates the state data with the new name value entered by the user
                    onChange={(e) => setData({ ...data, name: e.target.value })} />
                <label>Email</label>
                <input type='email' placeholder='Email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password</label>
                <input type='password' placeholder='Password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
