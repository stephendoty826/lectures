
import React, { useState, useEffect } from 'react'

function App() {

  const [studentData, setStudentData] = useState([])

  useEffect(() => {

    const getData = async () => {
      
      let results = await fetch("/api")

      let data = await results.json()

      setStudentData(data)

    }

    getData()
    
  }, [])

  console.log("studentData", studentData)

  return (
    <>
      App
    </>
  )
}

export default App
