import { useState } from "react"

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = (e) => {
        //prevents from automatic refresh of page
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={loginUser}>
                <label>Email</label>
                <input type='email' placeholder='Email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password</label>
                <input type='password' placeholder='Password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
