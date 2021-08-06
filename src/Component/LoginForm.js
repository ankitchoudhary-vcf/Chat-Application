import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {'Project-ID': "4fcca4fa-bb1b-4bee-a528-a61f5c13a6c4", 'User-Name': username, 'User-Secret': password }

        try {
            // username | password => chat engine -> give message
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            // works out -> logged in
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();
        }
        catch (err) {
            // error -> incorrect credentials ...
            setError(`Oops, incorrect credentials, try again with correct credentials.`);
            setUsername('');
            setPassword('');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button" style={{backgroundColor: '#209cee'}}>
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    )
}


export default LoginForm;