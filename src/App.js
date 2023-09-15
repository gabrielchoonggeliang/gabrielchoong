import React from "react";
import "./App.css";
// import { Link, Route } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from "./layout/Layout.js";
import Blog from "./component/Blog/Blog";
import Coffee from "./component/Coffee/Coffee";

const nameHeader = "Gabriel Choong";
const name = "Gabriel Choong Ge Liang";

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <Layout header={nameHeader} />
                </header>

                <main>
                    <Routes>
                        <Route path="/" />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </main>

                <footer>
                    <Coffee />
                    <p>&copy; {new Date().getFullYear()} {name}</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;