import React, { useEffect, useState } from "react";
import "./Adminlog.css";
import axios from "axios";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

function Adminlogin() {
    const [details, setDetails] = useState([]);
    const [setData, setSetData] = useState(undefined);


    const [modelView, setModelView] = useState(false)

    useEffect(() => {
        getDetails()
    }, [])

    axios.defaults.withCredentials = true;
    const getDetails = async () => {

        await axios.get("http://localhost:5500/getallproductslist",{
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
            .then(response => {
                console.log(1);
                console.log(response.data.success);
                console.log(2);
                console.log(response.data.getlist);
                console.log(3);
                setDetails(response.data.getlist)
            })

            .catch(error => {
                console.log(error);
                alert(error.response.data.message)
            })
    }

    const HandleDelete = async (id) => {

        await axios.delete(`http://localhost:5500/products/${id}`,{
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
            .then(response => {
                console.log(response);
                console.log(response.data);
                console.log(response.data.success);
                alert(response.data.success)
                getDetails()

            })
            .catch(error => {
                console.log(error);
                alert(error.response.data.message)
            })
    }

    const toggle = (item) => {
        alert("You clicked on update/Edit")
        setSetData(item);
        setModelView(!modelView)
    }

    return (
        <div className="container">
            <h5>Dashboard</h5>
            <a href="/addnewproduct">Add New Product</a>

            <div className="pract2">

                {details.length ? details.map((item) => {
                    return (
                        <div key={item._id} className="childrow">                      
                                <div className="col">
                                    <h1>Name:- {item.name}</h1>
                                    <h1>Price:- {item.price}</h1>
                                    <h1>Quantity:- {item.quantity}</h1>
                                    <h1>Category:- {item.category}</h1>
                                    <h1>Description:-{item.description} </h1>
                                    <button onClick={() => { toggle(item) }} className="btn btn-success">Edit</button>
                                    <button onClick={() => { HandleDelete(item._id) }} className="btn btn-danger">Delete</button>
                                </div>
                                <Modal isOpen={modelView} toggle={toggle} className="grandchildrow">
                                    <ModalHeader toggle={toggle} className="EditHeader">Edit</ModalHeader>
                                    <ModalBody>
                                        <HandleEdit setData={setData} setModelView={setModelView} getDetails={getDetails} />
                                    </ModalBody>

                                </Modal>                          
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

function HandleEdit({ setData, setModelView, getDetails }) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        setName(setData.name)
        setPrice(setData.price)
        setQuantity(setData.quantity)
        setCategory(setData.category)
        setDescription(setData.description)
    }, [setData])

    const HandleSubmit = async (event) => {
        event.preventDefault();
        const id = setData._id;
        alert(`The details are name=${name}, price=${price}, quantity=${quantity}, category=${category}, description= ${description}`)
        await axios.put(`http://localhost:5500/putproductdetails/${id}`, {
            name, price, quantity, category, description
        }, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
            .then(response => {
                console.log(response.data);
                console.log(response.data.updateproduct);
                alert(response.data.success)
            })

            .catch(error => {
                console.log(error.data.message);
            })

    }

    return (
        <div className="container">
            <form onSubmit={HandleSubmit}>
                <label className="formitemlabel">Name</label>
                <input type="text" className="formiteminput" value={name} onChange={(e) => { setName(e.target.value) }} />

                <label className="formitemlabel">Price</label>
                <input type="text" className="formiteminput" value={price} onChange={(e) => { setPrice(e.target.value) }} />

                <label className="formitemlabel">Quantity</label>
                <input type="text" className="formiteminput" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />

                <label className="formitemlabel">Category</label>
                <input type="text" className="formiteminput" value={category} onChange={(e) => { setCategory(e.target.value) }} />

                <label className="formitemlabel">Description</label>
                <input type="text" className="formiteminput" value={description} onChange={(e) => { setDescription(e.target.value) }} />

                <input type="submit" className="btn btn-success btnitem"/>

            </form>

        </div>
    )

}


export default Adminlogin