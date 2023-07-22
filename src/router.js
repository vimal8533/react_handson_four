import React from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./home";
import Student from "./student";
import Contact from "./contact";
import Linkcompo from "./linkcomponent";


const Routers =()=>{
return(
<BrowserRouter>
<Linkcompo/>
<Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/student' element ={<Student/>} />
    <Route path='/contact' element ={<Contact/>} />
</Routes>
</BrowserRouter>


)

}

export default Routers