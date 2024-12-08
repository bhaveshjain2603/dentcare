import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import team1 from '../../img/team-1.jpg';
import team2 from '../../img/team-2.jpg';
import team3 from '../../img/team-3.jpg';
import team4 from '../../img/team-4.jpg';

const Dentists = () => {
  const dentists = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "General Dentistry",
      experience: "15+ years experience",
      image: team1
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Orthodontist",
      experience: "12+ years experience",
      image: team2
    },
    {
      name: "Dr. Emily Parker",
      specialization: "Pediatric Dentist",
      experience: "10+ years experience",
      image: team3
    },
    {
      name: "Dr. James Wilson",
      specialization: "Oral Surgeon",
      experience: "18+ years experience",
      image: team4
    }
  ];

  return (
    <section id="dentists" className="py-16 bg-light">
      <Container>
        <div className="text-center mb-12">
          <Typography variant="h3" className="mb-4 font-bold">
            Meet Our <span className='text-primary'>Expert Dentists</span>
          </Typography>
        </div>

        <Grid container spacing={4}>
          {dentists.map((dentist, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardMedia
                  component="img"
                  height="300"
                  image={dentist.image}
                  alt={dentist.name}
                  className="h-[300px] object-cover"
                />
                <CardContent className="text-center p-6">
                  <Typography variant="h5" className="font-bold mb-1">
                    {dentist.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" className="mb-1">
                    {dentist.specialization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dentist.experience}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Dentists;
