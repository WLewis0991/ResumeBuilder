
export default function Button(props){
    const {page, text} = props

    return(<>
        <button onClick={page}>{text}</button>
        </>)
    }