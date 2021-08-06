import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./Component/ChatFeed";
import LoginForm from "./Component/LoginForm";
import Header from "./Component/Header";
import { useState, useEffect } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

export const App = () => {
  const [logout, setLogout] = useState("");

  useEffect(() => {
    if (logout === false) {
      return () => {
        console.log("logout");
        <Redirect from="/dashboard" to="/" />;
      };
    }
  }, [logout]);


  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route
            exact
            path="/dashboard"
            render={() => {
              if (!localStorage.getItem("username")) {
                return <Redirect to="/" />;
              } else {
                return (
                  <>
                    <Header logout={logout} setLogout={setLogout} />

                    <ChatEngine
                      height="92vh"
                      projectID="4fcca4fa-bb1b-4bee-a528-a61f5c13a6c4"
                      userName={localStorage.getItem("username")}
                      userSecret={localStorage.getItem("password")}
                      renderChatFeed={(chatAppProps) => (
                        <ChatFeed {...chatAppProps} />
                      )}
                    />
                  </>
                );
              }
            }}
          ></Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
