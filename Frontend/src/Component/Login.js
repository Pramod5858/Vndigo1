import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homeproduct.css";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`email:${email}, password: ${password}`);
        await axios.post("http://localhost:5500/login", {
            email, password
        }, {
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(
            response => {
                console.log(response);
                console.log("1");
                console.log(response.data.success);
                console.log("2");
                console.log(response.data.data);
                console.log("3");
                console.log(response.data.token);
                console.log("4");
                console.log(response.data.role);
                console.log("5");

                localStorage.setItem("token", JSON.stringify(response.data.token))
                localStorage.setItem("user", JSON.stringify(response.data.data.user))
                console.log("4");
                if (response.data.success === true) {
                    alert("success true")
                    if (response.data.role === "admin") {
                        alert("You are ate dashboard")
                        navigate("/adminlogin")
                    } else {
                        alert("You are ate Home");
                        navigate("/")
                    }
                }
            }
        )
            .catch(error => {
                console.log(error);
                alert("No email found, you need to first signup then do login")
            })
    }

    return (
        <div className="container">       
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Login</label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type="submit" className="btn btn-success" />
                            <p>Not a member? <a href="/signupnow" >Sign-up now</a> </p>
                        </form>
                    </div>
                </div>       
        </div>
    )

}
export default Login