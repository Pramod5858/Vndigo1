import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homeproduct.css"

function Signupnow() {

    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [secretkey, setSecretkey] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {

        if(role==="admin" && secretkey !=="admin"){
            event.preventDefault();
            alert("Invalid admin")
        }


        alert(`name: ${name}, email: ${email}, password: ${password}`)
        await axios.post("http://localhost:5500/signup", {
            role, name, email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response);
            console.log(response.data);
            alert("successfully new user created");
            navigate("/login");
        })
            .catch(error => {
                console.log(error);
                alert("error")
            })
    }

    return (
        <div className="container">          
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div><h1>Sign-up</h1></div>
                            <div>
                                <h4>Register as
                                    <input className="form-check-input" type="radio" name="role" value="user" onChange={(e) => setRole(e.target.value)} />user
                                    <input className="form-check-input" type="radio" name="role" value="admin" onChange={(e) => setRole(e.target.value)} />admin
                                </h4>
                            </div>
                            {role === "admin" ?
                                <div className="mb-3">
                                    <label className="form-label">Secret Key </label>
                                    <input type="text" className="form-control" name="secretkey" value={secretkey} onChange={(e) => setSecretkey(e.target.value)} />
                                </div>
                                : null
                            }

                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type="submit" className="btn btn-success" />
                        </form>
                    </div>
                </div>
            

        </div>
    )
}
export default Signupnow