import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import  './App.css';
import ChatFeed from './Component/ChatFeed'
import LoginForm from './Component/LoginForm'

export const App = () => {

    if(!localStorage.getItem('username')) {
        return (
            <>
                <LoginForm/>
            </>
        )
    }
    return (
        <>
            <ChatEngine
                height="100vh"
                projectID="4fcca4fa-bb1b-4bee-a528-a61f5c13a6c4"
                userName={ localStorage.getItem('username') }
                userSecret={ localStorage.getItem('password') }
                renderChatFeed={(chatAppProps) => < ChatFeed { ... chatAppProps } />}
            />
            
        </>
    )
}

export default App;