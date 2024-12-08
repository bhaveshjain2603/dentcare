import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { motion } from 'framer-motion';
import service1 from '../img/service-1.jpg';
import service2 from '../img/service-2.jpg';
import service3 from '../img/service-3.jpg';
import service4 from '../img/service-4.jpg';

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      image: service1,
      treatments: [
        "Dental Cleanings",
        "Cavity Fillings",
        "Root Canals",
        "Dental Crowns",
        "Preventive Care"
      ]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      image: service2,
      treatments: [
        "Teeth Whitening",
        "Dental Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Invisalign"
      ]
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth and improve your bite with our orthodontic solutions.",
      image: service3,
      treatments: [
        "Traditional Braces",
        "Clear Aligners",
        "Retainers",
        "Bite Correction",
        "Early Intervention"
      ]
    },
    {
      title: "Oral Surgery",
      description: "Expert surgical procedures for complex dental issues.",
      image: service4,
      treatments: [
        "Wisdom Teeth Removal",
        "Dental Implants",
        "Bone Grafting",
        "Tooth Extractions",
        "Jaw Surgery"
      ]
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment.",
      image: service1,
      treatments: [
        "Child Cleanings",
        "Fluoride Treatments",
        "Dental Sealants",
        "Space Maintainers",
        "Emergency Care"
      ]
    },
    {
      title: "Emergency Dental Care",
      description: "Immediate dental care for urgent situations and accidents.",
      image: service2,
      treatments: [
        "Toothache Relief",
        "Emergency Extractions",
        "Broken Tooth Repair",
        "Lost Filling Treatment",
        "Sports Injuries"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4"
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <Typography variant="h3" className="mb-4 font-bold text-gray-800">
            Our <span className='text-primary'>Services</span>
          </Typography>
          <Typography variant="h6" className="text-gray-600 text-lg sm:text-xl">
            Comprehensive Dental Care for Your Entire Family
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    className="h-48 object-cover"
                  />
                  <CardContent>
                    <Typography variant="h5" className="mb-3 font-semibold text-primary">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" className="mb-4 text-gray-600">
                      {service.description}
                    </Typography>
                    <Box className="bg-gray-50 p-4 rounded-lg">
                      <Typography variant="h6" className="mb-2 text-gray-700">
                        Treatments Include:
                      </Typography>
                      <ul className="list-disc pl-5">
                        {service.treatments.map((treatment, idx) => (
                          <li key={idx} className="text-gray-600 mb-1 list-none">
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Services;
