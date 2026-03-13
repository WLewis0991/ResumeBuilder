import Projects from "./Projects.jsx"
import Button from "./assets/Button.jsx"
import { useState } from "react"

export default function Pesonal (props) {
    const {setView} = props


    return(<>
        <p>Personal</p>
        <Button text="Next Page" page = {() => setView("projects")}></Button>

    </>)
}