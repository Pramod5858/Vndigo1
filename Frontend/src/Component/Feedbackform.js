
import axios from "axios"; 
import React, { useState } from "react";


function Feedbackform() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState();
    const [feedback, setFeedback] = useState("");

    const HandleSubmit = async (event) => {
        event.preventDefault();
        alert(`The details are : ${firstname}, ${lastname}, ${phone}, ${feedback}`);
        await axios.post("http://localhost:5500/feedbackform", {
            firstname, lastname, phone, feedback
        }, {
            Headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response);
                console.log(response.data);
                alert("Thank you for your feedback")
            })
            .catch(error => {
                console.log(error)
                alert("error")
            })
    }

    return (
        <div className="container-fluid">
            <div className="grid text-center ">
                <h1>FEEDBACK FORM</h1>
                <form className="row g-3" onSubmit={HandleSubmit}>
                    <div >
                        <input type="text" className="form-control" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <textarea type="text" className="form-control" placeholder="Your feedback" style={{ height: "100px" }} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    </div>
                    <input type="submit" />
                </form>

            </div>


        </div>
    )
}

export default Feedbackform