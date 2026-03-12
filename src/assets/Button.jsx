
export default function Button(props){
    const {page, text} = props

    return(<>
        <button onClick={()=>renderView({page})}>{text}</button>
        </>)
    }