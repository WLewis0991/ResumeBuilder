import Button from "./assets/Button";

export default function Education (props){
    const {setView} = props

    return (<>
        <p>Education</p>
        <Button text="Previous Page" page = {() => setView("work")}></Button>

    </>)

}