import { useState } from 'react'
import Welcome from './Welcome.jsx'
import Template from './Template.jsx'

function App() {
  const [view, setView] = useState("welcome")
  



  return (<>
  <div className='app-container'>
    {view === "welcome" && <Welcome view={view} setView={setView}/>}
    {view === "template" && <Template />}
  </div>
  </>)
}

export default App
