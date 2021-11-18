
import React from 'react'
// import Fireworks from './components/classComp/Fireworks'
import Fireworks from './components/funcComp/Fireworks'
// import Counter from './components/classComp/Counter'
import Counter from './components/funcComp/Counter'
// import StatusPicker from './components/classComp/StatusPicker'
import StatusPicker from './components/funcComp/StatusPicker'
// import LanguagePicker from './components/classComp/LanguagePicker'
import LanguagePicker from './components/funcComp/LanguagePicker'

function App() {
  return (
    <>
      <Fireworks />
      <Counter />
      <StatusPicker />
      <br></br>
      <br></br>
      <LanguagePicker />
    </>
  )
}

export default App
