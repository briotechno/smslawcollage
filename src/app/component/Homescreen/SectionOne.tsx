"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "/assets/Slider1.jpg",
    "/assets/Slider2.jpg",
    "/assets/Slider3.jpg",
    "/assets/Slider4.jpg",
    "/assets/Slider5.jpg",
];

const SectionOne = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // large screens < 1024px
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768, // tablets < 768px
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 425, // small phones
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 375, // small phones
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <div className="relative w-full h-100">
                            <Image
                                src={src}
                                alt={`Image ${index}`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SectionOne;
