import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import  './App.css';
import ChatFeed from './Component/ChatFeed'

export const App = () => {
    return (
        <>
            <ChatEngine
                height="100vh"
                projectID="4fcca4fa-bb1b-4bee-a528-a61f5c13a6c4"
                userName="himanshu"
                userSecret="123456@himanshu"
                renderChatFeed={(chatAppProps) => < ChatFeed { ... chatAppProps } />}
            />
            
        </>
    )
}

export default App;