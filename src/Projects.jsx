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

    function deleteProject(index){
        setResumeData(r => ({
            ...r,
            projects: r.projects.filter((_, i) => i !== index)
        }))
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
    function deleteSkill(index){
        setResumeData(r => ({
            ...r,
            skills: r.skills.filter((_, i) => i !== index)
        }))
    }

    return(
    <>
        <header className="project-header">Projects</header>
        
        <div className="project-div">
        <p>Project Name</p>
        <input type="text" name="project" value={title} onChange={handleTitleChange}/>

        <p>Project Description</p>
        <input type="text" name="description" value={description} onChange={handleDescriptionChange}/>

        <br />
        <button className="project-submit-button" onClick={addProject}>submit project</button>
        </div>
        <div>
            <ul>
                {resumeData.projects.map((project,index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <button onClick={()=> deleteProject(index)}>Delete</button>
                    </li>
                    ))}
            </ul>
         </div>           
        <div className="skills-section">
        <header className="skills-header">Skill</header>
        <br />
        <textarea className="skills-input" type="text" value={skill} onChange={handleSkill}/>

        <br />
        <button className="submit-skill-button" onClick={addSkill}>Submit Skill</button>
        </div>
        <br /><br />
        <div>
            <ul>
                {resumeData.skills.map((skill, index)=> (
                    <li key={index}>
                        <p>{skill}</p>
                        <button onClick={() => deleteSkill(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        <br />

        <div className="button-container">
            <Button text="Previous Page" page={() => setView("personal")} />
            <Button text="Next Page" page={() => setView("work")} />
        </div>
    </>
    )
}