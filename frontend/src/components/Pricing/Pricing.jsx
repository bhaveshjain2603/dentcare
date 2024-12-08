import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Check } from '@mui/icons-material';

const Pricing = () => {
  const plans = [
    {
      title: "Basic Care",
      price: "$99",
      period: "per visit",
      features: [
        "Dental Check-up",
        "Basic Cleaning",
        "X-Ray Examination",
        "Basic Filling",
        "Consultation"
      ]
    },
    {
      title: "Advanced Care",
      price: "$199",
      period: "per visit",
      features: [
        "Everything in Basic",
        "Deep Cleaning",
        "Teeth Whitening",
        "Fluoride Treatment",
        "Emergency Care"
      ],
      featured: true
    },
    {
      title: "Premium Care",
      price: "$299",
      period: "per visit",
      features: [
        "Everything in Advanced",
        "Cosmetic Procedures",
        "Root Canal Treatment",
        "Custom Night Guard",
        "Priority Booking"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" className="text-center font-bold mb-12">
        <span className='text-primary'>Pricing</span> Plans
        </Typography>

        <Grid container spacing={4} justifyContent="center" className='p-4'>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                className={`h-full ${plan.featured ? 'shadow-xl border-primary border-2' : 'hover:shadow-lg'} transition-shadow`}
              >
                <CardContent className="text-center p-6">
                  <Typography variant="h5" component="h3" className="mb-4">
                    {plan.title}
                  </Typography>
                  <div className="mb-4">
                    <Typography variant="h3" component="p" className="font-bold text-3xl sm:text-4xl">
                      {plan.price}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {plan.period}
                    </Typography>
                  </div>
                  <div className="mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center mb-2 justify-center">
                        <Check className="text-green-500 mr-2" />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={plan.featured ? "contained" : "outlined"} 
                    color="primary"
                    fullWidth
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Pricing;
