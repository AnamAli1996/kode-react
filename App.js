import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NavigatorBar from "./components/NavigationBar"


class  App extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <NavigatorBar/>
                </div>
                <div className="ui container">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" exact component={LoginPage} />
                </div>
            </div>
        );

    }
}


export default App;
