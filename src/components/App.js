import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import '../css/Main.css';
import {Button} from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path="/" exact component={Register}/>
                        <Route path="/register" component={Register} />
                        <Route path="/homepage" component={MainLayout} />
                        <Route path="/login" exact component={Login} /> 
                    </Switch>
                    {/* <MainLayout /> */}
                    {/* <Login /> */}
                </div>
            </Router>
        )
    }
}

const Home = () => (
    <div className="home">
        <h1>Home Page</h1>
        <Link to="/login"><Button primary size='huge'>Login</Button></Link>
        <Link to="/homepage"><Button primary size='huge'>Home Page</Button></Link>

    </div>
);

export default App;