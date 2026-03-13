import Education from "./Education.jsx"
import Button from "./assets/Button.jsx"

export default function Work(props) {
    const {setView} = props

    return(<>
        <p>work</p>

        <Button text="Previous Page" page = {() => setView("projects")}></Button>
        <Button text="Next Page" page = {() => setView("education")}></Button>


    </>)
}