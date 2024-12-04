import React from 'react'
import './AddNumber.scss'
const AddNumber = () => {
  return (
    <div className='AddNumber'>
      <div className="content">
        <h1>Add number</h1>
        <div className="main">
            <fieldset>
                <legend>Person Details:</legend>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/>
                <label for="email">Number:</label>
                <input type="number" id="phone" name="phone"/>
            </fieldset>
        </div>
      </div>
    </div>
  )
}

export default AddNumber
