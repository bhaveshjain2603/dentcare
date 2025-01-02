import React from 'react';
import { 
  Box, 
  Typography, 
  Container,
  Card,
  CardContent,
  Grid
} from '@mui/material';

import {
  People as PeopleIcon,
  EventNote as EventNoteIcon,
  Receipt as ReceiptIcon,
  LocalHospital as LocalHospitalIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    { title: 'Total Patients', count: '1,234', icon: <PeopleIcon /> },
    { title: 'Today\'s Appointments', count: '28', icon: <EventNoteIcon /> },
    { title: 'Active Dentists', count: '12', icon: <LocalHospitalIcon /> },
    { title: 'Monthly Revenue', count: '$45,678', icon: <ReceiptIcon /> },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    p: 1.5, 
                    borderRadius: 2, 
                    bgcolor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}>
                    {React.cloneElement(stat.icon, { sx: { color: 'primary.main' } })}
                  </Box>
                  <Typography variant="h6" component="div">
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
                  {stat.count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add more dashboard content here */}
    </Box>
  );
};

export default Dashboard;
