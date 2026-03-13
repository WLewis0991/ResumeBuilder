

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
    </div>
    </>)
}