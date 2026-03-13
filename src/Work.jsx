import Education from "./Education.jsx"
import Button from "./assets/Button.jsx"
import { useState } from "react"

export default function Work(props) {
    const {setView, resumeData, setResumeData} = props
    const [name, setName] = useState("")
    const [position, setPosition] = useState("");
    const [yearStart, setYearStart] = useState("");
    const [yearEnd, setYearEnd] = useState("");
    const [description, setDescription] = useState("");

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handlePositionChange(e){
        setPosition(e.target.value)
    }

    function handleYearStartChange(e){
        setYearStart(e.target.value)
    }

    function handleYeaEndChange(e){
        setYearEnd(e.target.value)
    }
        
    function handleDesciptionChange(e){
        setDescription(e.target.value)
    }

    function addJob(){
    setResumeData(r => ({...r,work: [
        ...r.work,{ job:{name}, position: {position}, yearsWorked: `${yearStart} to ${yearEnd}`, description:{description}, }
        ]}));
        setName("");
        setPosition("");
        setYearStart("");
        setYearEnd("");
        setDescription("");
        console.log({resumeData})
    }

    return(<>
        <p>work</p>
        <br />
        <p>Job Name</p>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Position</p>
        <input type="text" value={position} onChange={handlePositionChange}/>
        <p>Years Worked </p>
        <input type="date" value={yearStart} onChange={handleYearStartChange}/><span>to</span><input type="date" value={yearEnd} onChange={handleYeaEndChange}/>
        <br />
        <p>Description/Responsibilities</p>
        <input type="text" value={description} onChange={handleDesciptionChange}/>
        <br />
        <button onClick={addJob}>Submit</button>

        <br />
        <div className="button-container">
            <Button text="Previous Page" page = {() => setView("projects")}></Button>
            <Button text="Next Page" page = {() => setView("education")}></Button>
        </div>

    </>)
}