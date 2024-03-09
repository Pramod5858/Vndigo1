import React from "react";
import './Keep.css';
//import Navbar from "./Navbar";
//import CarouselComponent from "./CarouselComponent";
//import Footer from "./Footer";
//import CorouselCard from "./CorouselCard";
import AllDetails from "./AllDetails";

import Homeproduct from "./Homeproduct";

function Home() {
    return (
        <div className="container-fluid">
            {/* <CarouselComponent /> */}
            {/* <CorouselCard /> */}
            <AllDetails />
            <Homeproduct />
        </div>
    )
}

export default Home