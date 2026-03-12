import Pesonal from "./Personal.jsx";
import Projects from "./Projects.jsx";
import Work from "./Work.jsx";
import Education from "./Education.jsx";
import Preview from "./Preview.jsx";


export default function Template() {

    return(<>
  
    <div className="template-page">
          <p>Template</p>
        <div className="template-container">
            <div className="input-container">
                <Pesonal />
                <Projects />
                <Work />
                <Education /> 
            </div>
            <div className="preview-container">
                <Preview />
            </div>
        </div>
    </div>
    
    </>)
}