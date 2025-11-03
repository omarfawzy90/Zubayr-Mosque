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
      title: 'تدبر القرآن',
      lecturer: 'الشيخ أشرف حجر ',
      time: 'بعد صلاة الفجر',
      duration: '30 mins',
      date: '2025-11-07',
      lecturerImage: '/images/lecturer2.jpg',
    },
    
    {
      id: 2,
      title: 'أسماء الله الحسني',
      lecturer: 'الشيخ إسلام محى',
      time: 'بعد صلاة الجمعه',
      duration: '20 mins',
      date: '2025-11-07',
      lecturerImage: '/images/lecturer1.jpg',
    },
    {
      id: 3,
      title: 'صور من حياة الصحابة',
      lecturer: 'الشيخ أحمد جلال',
      time: 'بعد صلاة الفجر',
      duration: '30 mins',
      date: '2025-11-08',
      lecturerImage: '/images/lecturer2.jpg',
    },
   
    {
      id: 4,
      title: 'كتاب الإكسير لإبن القيم: أعمال القلوب',
      lecturer: 'الشيخ أحمد جلال',
      time: 'بعد صلاة العشاء',
      duration: '45 mins',
      date: '2025-11-09',
      lecturerImage: '/images/lecturer2.jpg',
    },
     {
      id: 5,
      title: 'الفقه الميسر',
      lecturer: 'الشيخ أحمد جلال',
      time: 'بعد صلاة الفجر',
      duration: '45 mins',
      date: '2025-11-10',
      lecturerImage: '/images/lecturer2.jpg',
    },
    //   {
    //   id: 5,
    //   title: 'مقرأة',
    //   lecturer: 'الشيخ د كمال ',
    //   time: 'بعد صلاة الفجر',
    //   duration: '30 mins',
    //   date: '2025-11-09',
    //   lecturerImage: '/images/lecturer2.jpg',
    // },
    {
      id: 6,
      title: 'أصول الإيمان',
      lecturer: 'الشيخ أحمد جلال',
      time: 'بعد صلاة الفجر',
      duration: '45 mins',
      date: '2025-11-12',
      lecturerImage: '/images/lecturer2.jpg',
    },
    
  ];
/*
يوم الجمعة بعد الفجر 
تدبر القرآن أ. أشرف حجر

يوم السبت بعد الفجر
صور من حياة الصحابة أحمد جلال

يوم الأربعاء بعد الفجر 
أصول الإيمان أحمد جلال

يوم الأحد والثلاثاء والخميس بعد الفجر
مقرأة د. كمال 

وممكن تعديل كلمة الكسير 
إلى ( الإكسير )
*/
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
                مع {lecture.lecturer}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                <Chip
                  icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                  label={new Date(lecture.date).toLocaleDateString('ar', {
                    weekday: 'long',
                  })}
                  size="small"
                  sx={{ bgcolor: 'white', color: 'primary.main' }}
                />
                <Chip
                  icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                  label={(lecture.time)}
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