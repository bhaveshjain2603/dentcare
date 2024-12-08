import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography, Container } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.jpg';
import carousel3 from '../../img/carousel-3.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      title: "Welcome to DentalCare Clinic",
      description: "Your trusted partner in dental health and beautiful smiles",
      image: carousel1
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Experience modern dentistry with cutting-edge technology",
      image: carousel2
    },
    {
      title: "Expert Dental Care",
      description: "Our experienced team is dedicated to your oral health",
      image: carousel3
    }
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Paper
              className="relative h-[600px] flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Container maxWidth="lg">
                <div className="text-center text-white">
                  <Typography variant="h2" component="h1" className="mb-4 text-3xl sm:text-4xl">
                    {slide.title}
                  </Typography>
                  <Typography variant="h5" className="mb-8 text-lg font-light sm:text-2xl">
                    {slide.description}
                  </Typography>
                </div>
              </Container>
            </Paper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
