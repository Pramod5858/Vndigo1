import axios from "axios";
import React, { useState } from "react";
import "./Addnewproduct.css";
//import Cookies from "js-cookie";

function Addnewproduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const HandleSubmit = async (event) => {
        event.preventDefault();
        alert(`the det ails are name:=${name},price:=${price},quantity:=${quantity}, category:=${category}, description:=${description}`);
         const userId = JSON.parse(localStorage.getItem("user")).id;
         console.log(userId);

        //const userId = Cookies.getItem('token');
        //console.log(userId);
        await axios.post("http://localhost:5500/addnewproduct", {
            name, price, quantity, category, description, userId
        }, {
            headers: {
                "Content-Type": "application/json",
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then(response => {
                console.log(response.data.addnewproduct);
                alert(response.data.success)
            })
            .catch(error => {
                console.log(error);
                alert(error.data)
            })
    }

    return (
        <div className="container">
            <h1>Hi addnewproduct</h1>
            <form onSubmit={HandleSubmit}>
                <label className="design1">Name</label>
                <input className="design2" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />

                <label className="design1">Price</label>
                <input className="design2" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product Price" />

                <label className="design1">Quantity</label>
                <input className="design2" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter product Quantity" />

                <label className="design1">Category</label>
                <input className="design2" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter product Category" />

                <label className="design1">Description</label>
                <input className="design2" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter product Description" />

                <input type="submit" className="btn btn-info" />
            </form>
        </div>
    )

}

export default Addnewproduct