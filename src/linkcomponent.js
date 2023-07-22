import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Linkcompo =()=>{
    return(
        <div className="Links">
                  <Link to='/' className="lin" >Home</Link>
                  <Link to='/student' className="lin">Student</Link>
                  <Link to='/contact' className="lin">Contact</Link>
        </div>
      
    )

}

export default Linkcompo;