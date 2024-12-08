import React, { useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import service1 from '../../img/service-1.jpg';
import service2 from '../../img/service-2.jpg';
import service3 from '../../img/service-3.jpg';
import service4 from '../../img/service-4.jpg';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments",
      image: service1
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and other aesthetic treatments",
      image: service2
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with braces and clear aligners",
      image: service3
    },
    {
      title: "Oral Surgery",
      description: "Expert surgical procedures including extractions and implants",
      image: service4
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      image: service1
    },
    {
      title: "Emergency Care",
      description: "Immediate dental care for urgent situations",
      image: service2
    }
  ];

  return (
    <section id="services" className="pt-4 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h2" className="text-center font-bold mb-12 text-gray-800">
            Our <span className='text-primary'>Services</span>
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transform hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    className="h-48 object-cover"
                  />
                  <CardContent className="bg-white bg-opacity-90 backdrop-blur-sm">
                    <Typography variant="h6" component="h3" className="mb-2 text-primary">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
