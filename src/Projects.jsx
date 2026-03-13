import Work from "./Work.jsx"
import Button from "./assets/Button.jsx"
import { useState } from "react"

export default function Projects (props){

    const {setView, resumeData, setResumeData} = props

    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [skill, setSkill] = useState("")

    function handleTitleChange(e){
        setTitle(e.target.value)
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    function handleSkill(e){
        setSkill(e.target.value)
    }

    function addProject(){
        setResumeData(r => ({
            ...r,
            projects: [
                ...r.projects,
                { title, description }   // ✅ FIXED
            ]
        }))

        setTitle("")
        setDescription("")
    }

    function addSkill(){
        setResumeData(r => ({
            ...r,
            skills: [
                ...r.skills,
                skill
            ]
        }))

        setSkill("")
    }

    return(
    <>
        <p>Projects</p>
        <br />

        <p>Project Name</p>
        <input type="text" name="project" value={title} onChange={handleTitleChange}/>

        <p>Project Description</p>
        <input type="text" name="description" value={description} onChange={handleDescriptionChange}/>

        <br />
        <button onClick={addProject}>submit project</button>

        <br /><br />

        <label>Skill</label>
        <br />
        <input type="text" value={skill} onChange={handleSkill}/>

        <br />
        <button onClick={addSkill}>Submit Skill</button>

        <br /><br />

        <div className="button-container">
            <Button text="Previous Page" page={() => setView("personal")} />
            <Button text="Next Page" page={() => setView("work")} />
        </div>
    </>
    )
}