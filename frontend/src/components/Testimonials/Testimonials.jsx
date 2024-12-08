import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';
import { FormatQuote } from '@mui/icons-material';
import testimonial1 from '../../img/testimonial-1.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Patient",
      comment: "The best dental experience I've ever had. The staff is friendly and professional, and Dr. Johnson made me feel completely at ease.",
      image: testimonial1
    },
    {
      name: "Emma Davis",
      role: "Patient",
      comment: "I've been coming here for years and have always received excellent care. The new facilities are amazing and the team is wonderful!",
      image: testimonial1
    },
    {
      name: "David Wilson",
      role: "Patient",
      comment: "Incredible service and care. They really go above and beyond to ensure patient comfort and satisfaction.",
      image: testimonial1
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" className="text-center font-bold mb-12">
          What Our <span className='text-primary'>Patients Say</span>
        </Typography>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <Paper className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <FormatQuote className="text-primary text-6xl transform rotate-180" />
                </div>
                <Typography variant="body1" className="mb-6 italic">
                  "{testimonial.comment}"
                </Typography>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <Typography variant="h6" component="p">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.role}
                    </Typography>
                  </div>
                </div>
              </Paper>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
