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
            ...r.education,{ name, year, description }
        ]}));
        setName("");
        setYear("")
        setDescription("");
        console.log({resumeData})    
    }

    function removeEducation(index){
        setResumeData(r => ({ ...r, education: [
            ...r.education.filter((_,i)=> i !== index)
        ] 
        }))
    }

    return (<>
        <header className="education-header">Education</header>
        <div className="education-section">
        <p>Name</p>
        <input className="education-input" type="text" value={name} onChange={handleNameChange}/>
        <p>Year Attended</p>
        <input type="date" className="date-input" value={year} onChange={handleYearChange}/>
        <p>Description/Achievements</p>
        <textarea type="text" value={description} onChange={handleDescriptionChange}/>
        <br />
        <button className="education-submit-button" onClick={addEducation}>Submit</button>
        </div>
        <div>
            <ul>
                {resumeData.education.map((school, index)=> (
                    <li key={index}>
                        <h4>{school.name}</h4>
                        <p>{school.year}</p>
                        <p>{school.description}</p>
                        <button onClick={()=> removeEducation(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        <br />
         
        <div className="button-container">
            <Button text="Previous Page" page = {() => setView("work")}></Button>
            <Button text="Next Page" page = {() => setView("education")}></Button>
        </div>
    </>)

}