
import React from 'react'
import Button from './components/functionalComponents/Button'
import Days from './components/Days'
import Days2 from './components/functionalComponents/Days'
import DropDown from './components/DropDown'
import ContactList from './components/ContactList'
// import ContactList2 from './components/ContactList2'
import contactData from './data/contacts'
// import contactData2 from './data/contacts2'

function App() {
  return (
    <>
      <Button buttonColor="purpleButton" text="I'm a purple button!" />
      <Button buttonColor="blueButton" text="I'm a blue button!" />
      <Button buttonColor="orangeButton" text="I'm a orange button!" />
      <ContactList data={contactData}/>
      {/* <ContactList2 data={contactData2}/> */}
      <Days />
      <Days2 />
      <DropDown />
    </>
  )
}

export default App


