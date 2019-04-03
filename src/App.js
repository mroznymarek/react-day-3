import React from 'react'
import Counter from './Counter';
import TypeName from './TypeName';
import Lifecycle from './Lifecycle';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = (props) => (
  
  <div>
   
    
    <Router>
    <Link to="/">Home</Link>
    <Link to="/lifecycle">Lifecycle</Link>
    <Route path={"/lifecycle"} component={Lifecycle} />
    </Router>
    <Counter number = {5}/>
    <Counter/>

    <TypeName />
  </div>
 
)
  
  

export default App
