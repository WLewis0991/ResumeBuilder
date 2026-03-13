import Button from "./assets/Button";
import { useState } from "react";

export default function Education (props){
    const {setView, resumeData, setResumeData} = props
    
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleYearChange(e){
        setYear(e.target.value)
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    function addEducation (){
        setResumeData(r => ({...r,education: [
            ...r.education,{ name:{name}, year:{year}, description: {description} }
        ]}));
        setName("");
        setYear("")
        setDescription("");
        console.log({resumeData})    
    }

    return (<>
        <p>Education</p>
        <br />
        <p>Name</p>
        <input type="text" value={name} onChange={handleNameChange}/>
        <p>Year Attended</p>
        <input type="number" value={year} onChange={handleYearChange}/>
        <p>Description/Achievements</p>
        <input type="text" value={description} onChange={handleDescriptionChange}/>
        <br />
        <button onClick={addEducation}>Submit</button>
        <br />
        <br />
         
        <div className="button-container">
            <Button text="Previous Page" page = {() => setView("work")}></Button>
            <Button text="Next Page" page = {() => setView("education")}></Button>
        </div>
    </>)

}