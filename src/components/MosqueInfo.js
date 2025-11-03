import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const MosqueInfo = () => {
  const mosqueInfo = {
    name: 'Zubayr Mosque',
    address: 'G5, Madinaty, Cairo, Egypt',
    phone: '',
    email: '',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=30.0444,31.2357',
    latitude: 30.0444,
    longitude: 31.2357,
  };

  return (
    <Card sx={{ bgcolor: 'secondary.main', color: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <LocationOnIcon sx={{ fontSize: 32 }} />
          <Typography variant="h3" component="h2" sx={{ color: 'white' }}>
            Mosque Location
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            {mosqueInfo.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
            {mosqueInfo.address}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ fontSize: 20 }} />
              <Typography variant="body2">{mosqueInfo.phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ fontSize: 20 }} />
              <Typography variant="body2">{mosqueInfo.email}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MosqueInfo;