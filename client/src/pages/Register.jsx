import { useState } from "react"

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = (e) => {
        //prevents from automatic refresh of page
        e.preventDefault()
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
