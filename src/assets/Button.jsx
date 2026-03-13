
export default function Button(props){
    const {page, text} = props

    return(<>
        <button className="nav-button" onClick={page}>{text}</button>
        </>)
    }