import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Chip, duration } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const UpcomingLectures = () => {
  const convertTo12Hour = (time24) => {
    const [hours, minutes] = time24.split(':');
    let hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minutes} ${ampm}`;
  };

  // This would typically come from your backend
  const lectures = [
    {
      id: 1,
      title: 'أسماء الله الحسني',
      lecturer: 'شيخ إسلام',
      time: '13:00',
      duration: '20 mins',
      date: '2025-11-07',
      lecturerImage: '/images/lecturer1.jpg',
    },
    {
      id: 2,
      title: 'كتاب الكسير لأبن القيم: أعمال القلوب',
      lecturer: 'شيخ أحمد عبدالله',
      time: '19:00',
      duration: '45 mins',
      date: '2025-11-09',
      lecturerImage: '/images/lecturer2.jpg',
    },
  ];

  return (
    <Card sx={{ bgcolor: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
          <AutoStoriesIcon sx={{ color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h3" component="h2" sx={{ color: 'primary.main' }}>
            Upcoming Lectures - جلسات العلم
          </Typography>
        </Box>
        {lectures.map((lecture) => (
          <Box
            key={lecture.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              p: 2,
              bgcolor: 'primary.light',
              borderRadius: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateX(5px)',
                bgcolor: 'primary.main',
              },
            }}
          >
            <Avatar
              src={lecture.lecturerImage}
              sx={{ 
                width: 56, 
                height: 56, 
                mr: 2,
                bgcolor: 'secondary.main',
              }}
            >
              <AutoStoriesIcon />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                {lecture.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                by {lecture.lecturer}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                <Chip
                  icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                  label={new Date(lecture.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                  size="small"
                  sx={{ bgcolor: 'white', color: 'primary.main' }}
                />
                <Chip
                  icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                  label={convertTo12Hour(lecture.time)}
                  size="small"
                  sx={{ bgcolor: 'secondary.main', color: 'white' }}
                />
                {lecture.duration && (
                  <Chip
                    label={lecture.duration}
                    size="small"
                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.9)', color: 'primary.main', fontWeight: 'bold' }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default UpcomingLectures;