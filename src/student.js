import React, { useState } from "react";
import './App.css';
const Student =()=>{
    const [data]=useState([
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        },
        {
            Name:"Vimal Kumar",
            Age:23,
            Course:"MERN",
            Batch:"January",
            Change:"edit"
        }
    ])
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
            {
                data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td>{item.Change}</td>
                        </tr>
                    )
                })
            }

        </table>
        
     
    )
}
export default Student;
