import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import AdminNav from './AdminNav';

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: 3, pb: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={2.5}>
            <AdminNav />
          </Grid>
          <Grid item xs={12} md={9} lg={9.5}>
            <Paper sx={{ p: 3, minHeight: 'calc(100vh - 48px)' }}>
              {children}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminLayout;
