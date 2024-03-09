import React from "react";
import './Keep.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";


export default function CarouselComponent() {
    return (
        <div >
            <Carousel className="carouselparent">
                <div className="carouselchild">
                    
                    <img src="./images/pizza1.jpg"  alt="notfound1" />
                </div>
                <div className="carouselchild">
                    <img src="./images/pizza3.jpeg"  alt="notfound2" />
                </div>
                <div className="carouselchild">
                    <img src="./images/pizza4.jpg" alt="notfound3" />
                </div>
                <div className="carouselchild">
                    <img src="./images/pizza5.jpg" alt="notfound4" />
                </div>
            </Carousel>
        </div>
    )
}