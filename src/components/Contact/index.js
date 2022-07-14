import React from 'react'
import { Contact } from './Contact'
import JsonData from 'data/data.json'
import { useState, useEffect } from 'react'


const App = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
      setLandingPageData(JsonData)
    }, [])
  
    return (
        <div>
            <Contact data={landingPageData.Contact}/>
        </div>
    )
}

export default App