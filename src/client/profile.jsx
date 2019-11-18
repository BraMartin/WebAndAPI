import React from "react";
import {LinkHome} from "./link_home";

export class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = (
            name: ""
        );
    }
    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    render() {
        return (

            <div>
                <h2>{this.state.name}</h2>

                <p>
                    Hi, and welcome to your profile. Please fill in your name to make it official.
                </p>
                <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                <p></p>
                <LinkHome/>
            </div>

        );
    }
}
