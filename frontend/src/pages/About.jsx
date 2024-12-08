import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: "About DentCare Clinic",
      description: "Providing exceptional dental care since 2000. Our mission is to deliver the highest quality dental services with a gentle and personal touch."
    },
    {
      title: "Our Vision",
      description: "To be the leading dental care provider, recognized for excellence in patient care, innovative treatments, and outstanding service to our community."
    }
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* About Us Section */}
          <Grid item xs={12}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Typography variant="h3" className="mb-8 text-center font-bold text-gray-800">
                <span className='text-primary'>About</span> DentCare 
              </Typography>
              <Typography variant="body1" className="mb-8 text-center sm:text-lg text-gray-600">
                Providing exceptional dental care since 2000. Our mission is to deliver the highest quality dental services
                with a gentle and personal touch.
              </Typography>
            </motion.div>
          </Grid>

          {/* Vision & Mission */}
          {values.map((value, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                  <Paper elevation={3} className="p-6 h-full">
                      <Typography variant="h4" className="mb-4 font-semibold text-2xl sm:text-3xl text-primary">
                        {value.title}
                      </Typography>
                      <Typography variant="body1" className="text-gray-700">
                        {value.description}
                      </Typography>
                  </Paper>
              </motion.div>
            </Grid>
          ))}

          {/* Core Values */}
          <Grid item xs={12}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Typography variant="h3" className="my-8 text-center font-bold text-3xl sm:text-4xl text-gray-800">
                Our Core Values
              </Typography>
              <Grid container spacing={4}>
                {[
                  {
                    title: "Excellence",
                    description: "Striving for the highest standards in dental care and service."
                  },
                  {
                    title: "Integrity",
                    description: "Maintaining honest and ethical practices in all our interactions."
                  },
                  {
                    title: "Compassion",
                    description: "Treating each patient with kindness, empathy, and understanding."
                  },
                  {
                    title: "Innovation",
                    description: "Embracing advanced technology and modern dental techniques."
                  }
                ].map((value, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="text-center p-2"
                    >
                      <Paper elevation={2} className="py-4 px-6 h-full">
                        <Typography variant="h5" className="mb-3 font-semibold text-2xl sm:text-2xl text-primary">
                          {value.title}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          {value.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default About;
