import {NavLink} from "react-router-dom"

export const Headers = () => {
    return(
    <header>
    <div className="container">
        <div className="grid navbar-grid">
            <div className="Logo">
                <h1>WorldAtlas</h1>
            </div>
       

        <nav>
            <ul>
                {/* There is no home route */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/country">Country</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </div>
    </div>
    </header>
    );
};