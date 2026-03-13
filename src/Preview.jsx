

export default function Preview(props) {
    const{resumeData} = props

    return(<>
    <div>
        <p>Preview</p>
        <div>
            <h1>{resumeData.personal.name}</h1>
            <p>{resumeData.personal.address}</p>
            <p>{resumeData.personal.email}</p>
            <p>{resumeData.personal.phone}</p>
            <p>{resumeData.personal.about}</p>

        </div>
        <div>
            <ul>
                {resumeData.projects.map((project,index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                    ))}
            </ul>
        </div>
        <div>
            <ul>
                {resumeData.skills.map((skill, index)=> (
                    <li key={index}>
                        <p>{skill}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {resumeData.work.map((work, index)=> (
                    <li key={index}>
                        <p>{work.name}</p>
                        <p>{work.position}</p>
                        <p>{work.yearStart} to {work.yearEnd}</p>
                        <p>{work.description}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {resumeData.education.map((school, index)=> (
                    <li key={index}>
                        <h4>{school.name}</h4>
                        <p>{school.year}</p>
                        <p>{school.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>)
}