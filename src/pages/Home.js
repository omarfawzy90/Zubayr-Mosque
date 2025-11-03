import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import PrayerTimes from '../components/PrayerTimes';
import UpcomingLectures from '../components/UpcomingLectures';
import MosqueInfo from '../components/MosqueInfo';
import Announcements from '../components/Announcements';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Paper
          elevation={3}
          sx={{
            mb: 4,
            p: 4,
            background: 'linear-gradient(135deg, #1F4A3D 0%, #2E7D32 100%)',
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{ color: 'white', mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
             مسجد الزُّبَيْرُ بْنُ العَوَّام بمدينتي
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ color: 'secondary.main', fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            Zubayr ibn al-Awwam Mosque in Madinaty
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: 'rgba(255, 255, 255, 0.9)', mt: 2 }}
          >
            اهلاً بزوار مسجد الزُّبَيْرُ الكِرام
          </Typography>
        </Paper>

        {/* Prayer Times and Lectures */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
          <Box sx={{ flex: 1 }}>
            <PrayerTimes />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <UpcomingLectures />
            <Announcements />
          </Box>
        </Box>

        {/* Mosque Location */}
        <Box>
          <MosqueInfo />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;