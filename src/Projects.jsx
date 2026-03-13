import Work from "./Work.jsx"
import Button from "./assets/Button.jsx"
import { useState } from "react"

export default function Projects (props){

    const {setView, resumeData, setResumeData} = props

    const [name,setName] = useState("")
    const [description, setDescription] = useState("");

    const [skill, setSkill] = useState("");

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    function handleSkill(e){
        setSkill(e.target.value)
    }

    function addProject(){
        setResumeData(r => ({...r,projects: [
            ...r.projects,{ title:{name}, description: {description} }
        ]}));
        setName("");
        setDescription("");
        console.log({resumeData})
    }

    function addSkill(){
        setResumeData(r => ({...r,skills:[
            ...r.skills,{skill}
        ]}));
        console.log({resumeData})
        setSkill("")

    }

    return(<>
        <p>Projects</p>
        <br />
        <p>project Name</p>
        <input type="text" name="project" value={name} onChange={handleNameChange}/>

        <p>Project Description</p>
        <input type="text" name="description" value={description} onChange={handleDescriptionChange}/>
        <br />
        <button onClick={addProject}>submit project</button>
        <br />
        <br />
        <label>Skill</label>
        <br />
        <input type="text" value={skill} onChange={handleSkill}/>
        <br />
        <button onClick={addSkill}>Submit Skill</button>
        <br />
        <br />

        <Button text= "Previous Page" page={() => setView("personal")} />
        <Button text="Next Page" page = {() => setView("work")} />
        

    </>)
}