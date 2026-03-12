import Template from "./Template"

export default function Welcome (props) {
    const {setView} = props

    return(<>
        <div className="welcome-section">
            <p>Welcome</p>
            <button onClick={()=>setView("template")} className="welcome-button">Enter</button>
        </div>
    </>)
}