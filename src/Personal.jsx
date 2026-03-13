import Projects from "./Projects.jsx"
import Button from "./assets/Button.jsx"
import { useState } from "react"

export default function Pesonal (props) {
    const {setView} = props


    return(<>
    <div>
        <p>Personal</p>
        <label>Name</label>
        <input type="text"/>
        <br />
        <label>Address</label>
        <input type="text" />
        <br />
        <label>Email</label>
        <input type="text" />
        <br />
        <label>Phone Number</label>
        <input type="text" />
        <br />

    </div>


        
        
        <br />
        <Button text="Next Page" page = {() => setView("projects")}></Button>

    </>)
}