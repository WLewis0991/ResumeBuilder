import Work from "./Work.jsx"
import Button from "./assets/Button.jsx"

export default function Projects (props){

    const {setView} = props

    return(<>
        <p>Projects</p>

        <Button text= "Previous Page" page={() => setView("personal")} />
        <Button text="Next Page" page = {() => setView("work")}></Button>
        

    </>)
}