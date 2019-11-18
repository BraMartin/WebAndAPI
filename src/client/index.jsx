import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Home} from "./home";
import {Profile} from "./profile";
import {Settings} from "./settings";


class App extends React.Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/settings" component={Settings}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById("root"));