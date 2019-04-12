// import React from 'react';
// import ReactDOM from 'react-dom';
// import Kennel from "./componets/Kennel"

// ReactDOM.render(<Kennel />, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './componets/Kennel'

import './index.css'

ReactDOM.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root'))