import React from "react";
import {Link} from 'react-router-dom'


export const Home = () => {
    return (
        <div>
            <h1>Home page of PG6301</h1>

            <div>
                <h3>Navigate to other parts of this SPA</h3>
                <ul>
                    <li><Link to={"Profile"}>Profile</Link></li>
                    <li><Link to={"Settings"}>Settings</Link></li>
                </ul>
            </div>
            <div>
                <h1>Feed</h1>
            </div>

            <div class="card">
                <h3>John Doe</h3>
                <p>
                    Roses are red, violets are blue, Suger is sweet, and so are you! Cringe worthy post, but gotta love it.
                </p>
            </div>

            <div class="card">
                <h3>Ola Normann</h3>
                <p>
                    There's no love like a mother's love. Happy mother´s day!
                </p>
            </div>

            <div className="card">
                <h3>Jane Doe</h3>
                <p>
                    Finally figured out how to write the code to my exam!
                </p>
            </div>


        </div>
    );
};