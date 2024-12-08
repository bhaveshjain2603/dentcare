import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { LocalHospital, Timer, Group, Star } from '@mui/icons-material';

const About = () => {
  const features = [
    {
      icon: <LocalHospital className="text-primary text-4xl" />,
      title: "Expert Care",
      description: "Our team of experienced dentists provides top-quality dental care"
    },
    {
      icon: <Timer className="text-primary text-4xl" />,
      title: "Modern Facilities",
      description: "State-of-the-art equipment and comfortable treatment rooms"
    },
    {
      icon: <Group className="text-primary text-4xl" />,
      title: "Patient-Focused",
      description: "Personalized care tailored to your unique dental needs"
    },
    {
      icon: <Star className="text-primary text-4xl" />,
      title: "Quality Service",
      description: "Committed to excellence in dental healthcare"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" className="text-center font-bold mb-4">
          <span className='text-primary'>About</span> Us
        </Typography>
        
        <Typography variant="body1" className="text-center mb-12 max-w-3xl mx-auto">
          DentalCare Clinic has been providing exceptional dental care services for over 15 years. 
          Our mission is to deliver the highest quality dental care in a comfortable and welcoming environment.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <Typography variant="h6" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default About;
