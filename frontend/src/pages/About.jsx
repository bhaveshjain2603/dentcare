import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  MedicalServices, 
  Psychology, 
  Favorite, 
  GroupsRounded,
  Timer,
  EmojiEvents,
  LocalHospital,
  People
} from '@mui/icons-material';
import carousel2 from '../img/carousel-2.jpg';

const About = () => {
  const stats = [
    { icon: <Timer className="text-4xl" />, count: "15+", label: "Years of Experience" },
    { icon: <People className="text-4xl" />, count: "1000+", label: "Happy Patients" },
    { icon: <LocalHospital className="text-4xl" />, count: "10+", label: "Dental Specialists" },
    { icon: <EmojiEvents className="text-4xl" />, count: "15+", label: "Awards Received" }
  ];

  const values = [
    {
      icon: <MedicalServices className="text-primary text-4xl" />,
      title: "Excellence in Care",
      description: "We strive to provide the highest quality dental care using state-of-the-art technology and techniques."
    },
    {
      icon: <Psychology className="text-primary text-4xl" />,
      title: "Patient-Centered Approach",
      description: "Your comfort and satisfaction are our top priorities. We take time to listen and understand your needs."
    },
    {
      icon: <Favorite className="text-primary text-4xl" />,
      title: "Compassionate Service",
      description: "We treat every patient with kindness, respect, and genuine care for their well-being."
    },
    {
      icon: <GroupsRounded className="text-primary text-4xl" />,
      title: "Team Excellence",
      description: "Our team of experienced professionals works together to deliver comprehensive dental solutions."
    }
  ];

  return (
    <Container maxWidth="xl" className="py-20 px-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Typography variant="h2" className="font-bold text-bold mb-4">
          <span className='text-primary'>About</span> DentCare
        </Typography>
        <Typography variant="h6" className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
          Providing exceptional dental care with a gentle touch since 2008. 
          Your smile is our passion, and your comfort is our priority.
        </Typography>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <Grid container spacing={4} className="justify-center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card className="text-center h-full text-lg sm:text-xl hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <Box className="text-primary mb-3">
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" className="font-bold text-lg sm:text-xl text-primary mb-2">
                    {stat.count}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 text-md sm:text-xl">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-20"
      >
        <Grid container spacing={8} className="items-center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" className="font-bold mb-6">
              Our <span className='text-primary'>Mission</span>
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              At DentCare, our mission is to provide exceptional dental care that enhances the quality of life for our patients. 
              We are committed to delivering personalized treatment plans using the latest technology and techniques.
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              We believe in creating lasting relationships with our patients, built on trust, transparency, and outstanding service. 
              Our team is dedicated to making every visit comfortable and stress-free.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img 
              src={carousel2} 
              alt="Modern Dental Clinic" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </Grid>
        </Grid>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Typography variant="h3" className="font-bold text-center mb-12">
          Our <span className='text-primary'>Core Values</span>
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center">
                  <Box className="mb-4">
                    {value.icon}
                  </Box>
                  <Typography variant="h6" className="font-bold mb-3">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
