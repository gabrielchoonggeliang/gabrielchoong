import React from "react";
import { Link } from "react-router-dom";

import "./Layout.css";

// import Blog from "../component/Blog/Blog.js";

function Layout(props) {
    return (
        <div className="header-layout">
            <h2 className="header"> {props.header} </h2>
            {/* <div className="header-list"> */}
            <ul className="list">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/blog">Blog</Link> </li>
                
            </ul>
            {/* </div> */}
        </div>
    )
}

export default Layout;