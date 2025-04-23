import React from 'react'
{
  /*
  This is the follow up questions page where we will ask user about his / her basic details which include name/nickname, age, height , weight and medical history which is optional
  */
}
const page = () => {
  return (
    <div className="initial-details-page follow-up">
      <div className="initial-details-container">
        <h2 className='font-extrabold text-3xl'>MIRA</h2>
        <div className="initial-details-form-container">
          <div className='initial-details-input'>
            <input type="text" id="nickname" placeholder='' required className=''></input>
            <label for="nickname">NickName</label>
          </div>
          <div className="initial-details-input">
          <input type="number" id="age" placeholder='' required className=''></input>
          <label for="age">Age</label>
          </div>
          <div className='initial-details-input'>
            <input type="number" id='height' placeholder='' required className=''></input>
            <label for='height'>Height</label>
          </div>
          <div className='initial-details-input'>
            <input type="number" id='weight' placeholder='' required className=''></input>
            <label for='weight'>Weight</label>
          </div>
        </div>
        <div className='initial-details-input'>
          <textarea className='resize-none' id='medical-history' placeholder=''></textarea>
          <label for='medical-history'>Medical History</label>
        </div>
        <button className='initial-details-sub-btn'>Continue</button>
      </div>
    </div>
  )
}

export default page
