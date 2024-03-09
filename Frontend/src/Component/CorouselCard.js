import React from 'react';
import Slider from 'react-slick';
import "./Card1.css";
//  import HorizontalSlider from 'react-horizontal-slider';

export default function CorouselCard() {
const settings = {
    dots:true,
    infinite: true,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    rtl:true
};

    return (
        // <div className='row overflow-x-auto'>
        <div className='slider-container'>
            <Slider {...settings}>
                {/* <HorizontalSlider title="Offer" height={300} weight={300} /> */}
                {/* <div className='col '> */}
                <div className='card1'>
                    <h5 className='head1'>Get up to 10% off</h5>
                    <p className='head1'>on Indigo app bookings</p>
                    <p className='head2'>App with benefits</p>
                    <div className='row'>
                        <p className='col'>No expiry</p>
                        <p className='col' id='col2' >T&C apply*</p>
                    </div>
                </div>
                {/* </div> */}
                {/* <div className='col'> */}
                <div className='card1'>
                    <h5 className='head1'>Get flat INR 400*</h5>
                    <p className='head1'>cashback or upto 10%*</p>
                    <p className='head1'>cashback or upto 10%*</p>
                    <p className='head2'>App with benefits</p>
                    <div className='row'>
                        <p className='col'>No expiry</p>
                        <p className='col' id='col2' >T&C apply*</p>
                    </div>
                </div>

                {/* </div> */}
                {/* <div className='col'> */}
                <div className='card1'>
                    <h5 className='head1'>Get up to 10% off</h5>
                    <p className='head1'>on Indigo app bookings</p>
                    <p className='head2'>App with benefits</p>
                    <div className='row'>
                        <p className='col'>No expiry</p>
                        <p className='col' id='col2' >T&C apply*</p>
                    </div>
                </div>
                {/* </div> */}

                {/* <div className='col'> */}
                <div className='card1'>
                    <h5 className='head1'>Get up to 10% off</h5>
                    <p className='head1'>on Indigo app bookings</p>
                    <p className='head2'>App with benefits</p>
                    <div className='row'>
                        <p className='col'>No expiry</p>
                        <p className='col' id='col2' >T&C apply*</p>
                    </div>
                </div>
                {/* </div> */}

                {/* <div className='col'> */}
                <div className='card1'>
                    <h5 className='head1'>Get up to 10% off</h5>
                    <p className='head1'>on Indigo app bookings</p>
                    <p className='head2'>App with benefits</p>
                    <div className='row'>
                        <p className='col'>No expiry</p>
                        <p className='col' id='col2' >T&C apply*</p>
                    </div>
                </div>
                {/* </div> */}
            </Slider>
        </div>
    )
}
