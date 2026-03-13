import Projects from "./Projects.jsx"
import Button from "./assets/Button.jsx"
import { useState } from "react"

export default function Pesonal (props) {
    const {setView, resumeData, setResumeData} = props

  function handleChange(e) {
    const { name, value } = e.target;

    setResumeData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value
      }
    }));

}

    return(<>
    <div className="personal-section">
        <p>Personal</p>
        <label>Name</label>
        <input type="text" name="name" value={resumeData.personal.name} onChange={handleChange}/>
        <br />
        <label>Address</label>
        <input type="text" name="address" value={resumeData.personal.address} onChange={handleChange}/>
        <br />
        <label>Email</label>
        <input type="email" name="email" value={resumeData.personal.email} onChange={handleChange}/>
        <br />
        <label>Phone Number</label>
        <input type="text" name="phone" value={resumeData.personal.phone} onChange={handleChange}/>

        <br />
        <label>About</label>
        <input type="textarea" name="about" value={resumeData.personal.about} onChange={handleChange}/>

    </div>


        
        
        <br />
        <div className="button-container">
          <Button text="Previous Page" page = {() => setView("personal")}></Button>
          <Button text="Next Page" page = {() => setView("projects")}></Button>
        </div>

    </>)
}