import React, { useState } from 'react'
import "./Verifyotp.css";

export default function Verifyotp() {
    const [email, setEmail] = useState("");


    return (
        <div className='container'>
            <h5>Verifyotp</h5>
            <form className='boxmodel1'>
                <label className='bodlabel1'>Enter email Id</label>

                <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br/>

<label>Enter Otpss</label>
<input type='text' placeholder='Enter opt' />
                <input type='submit' />
            </form>
        </div>
    )
}


