import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Divider } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CampaignIcon from '@mui/icons-material/Campaign';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      type: 'announcement',
      title: 'هناك درس قصير كل يوم بعد صلاة العشاء و مقرأة للقرآن كل أحد و ثلاثاء وخميس بعد صلاة الفجر  للشيخ الدكتور كمال ناصر إمام مسجد الزبير',
      titleEn: '',
      content: '',
      contentEn: '',
      isUrgent: false,
    },
     {
      id: 2,
      type: 'announcement',
      title: 'هناك دورات  لتعليم تجويد القرآن الكريم وفن التلاوة بأسلوب بسيط وممتع للنساء، كل أثنين الساعة الخامسة والنصف مساءا حتي صلاة المغرب  مع الواعظة صفاء قطب',
      titleEn: '',
      content: '',
      contentEn: '',
      isUrgent: false,
    },
  ];

  /*
بشرى عظيمة لنساء مدينتي!🪄🪄🪄🪄🪄🪄🪄

❤️يسرنا أن نعلن عن انطلاق سلسلة دورات  لتعليم تجويد القرآن الكريم وفن التلاوة بأسلوب بسيط وممتع، تقدمه خادمة القرآن واعظة معتمده من وزارة الأوقاف صفاء قطب❤️❤️❤️
Www.safaakotb.com 

لماذا يجب أن تحضر؟

🪄تعلم قواعد التجويد بطريقة بسيطة و عملية وسهلة.

🪄اتقان التلاوة الصحيحة كما نزلت على سيدنا محمد ﷺ.

🏵️فهم وتدبر معاني الايات بشكل مبسط لربط الايات والاعانه علي الحفظ 

💮حفظ ومراجعة القرآن مع التثبيت وعمل اختبارات في ذلك 

🔊🔊🔊منهج الحلقة 
1️⃣تدبر وتفسير معاني الايات التي نتلوها
2️⃣ شرح حكم تجويدي 
 
3️⃣ تصحيح التلاوة وتطبيق الاحكام  

4️⃣ حفظ وإتقان وتأهيل معلمات 

وذلك بمسجد الزبير بن العوام بمدينتي منطقة الفلل اللوكيشن 
https://maps.app.goo.gl/SD5Mr9dncUjUywZYA
🚨وذلك يوم الاثنين 
🚨 الساعة الخامسة والنصف مساءا حتي صلاة المغرب 

تابعونا من خلال جروب مسجدنا
https://chat.whatsapp.com/BdXsIIjwfQZ2KdGWN4CWOh
  */

  const getIcon = (type) => {
    return type === 'news' ? <NewspaperIcon /> : <CampaignIcon />;
  };

  const getTypeLabel = (type) => {
    return type === 'news' ? 'أخبار - News' : 'إعلان - Announcement';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card sx={{ bgcolor: 'white' }}>
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <AnnouncementIcon sx={{ color: 'primary.main', fontSize: 24 }} />
          <Typography variant="h5" component="h2" sx={{ color: 'primary.main', fontSize: '1.25rem' }}>
            الإعلانات - Announcements
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {announcements.map((item) => (
            <Box
              key={item.id}
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: item.isUrgent ? 'error.main' : 'primary.light',
                bgcolor: item.isUrgent ? 'rgba(211, 47, 47, 0.05)' : 'rgba(31, 74, 61, 0.05)',
                transition: 'all 0.2s',
                '&:hover': {
                  boxShadow: 2,
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                <Chip
                  icon={getIcon(item.type)}
                  label={item.type === 'news' ? 'News' : 'Notice'}
                  size="small"
                  sx={{
                    bgcolor: item.type === 'news' ? 'info.main' : 'warning.main',
                    color: 'white',
                    fontSize: '0.7rem',
                    height: '20px',
                  }}
                />
                {item.isUrgent && (
                  <Chip
                    label="Urgent"
                    size="small"
                    color="error"
                    sx={{ fontSize: '0.7rem', height: '20px', animation: 'pulse 2s infinite' }}
                  />
                )}
              </Box>

              <Typography
                variant="body1"
                sx={{ color: 'primary.main', fontWeight: 'bold', mb: 0.5, textAlign: 'right', fontSize: '0.95rem' }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'primary.dark', mb: 0.5, fontSize: '0.85rem' }}
              >
                {item.titleEn}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', display: 'block', mb: 0.5, textAlign: 'right', lineHeight: 1.4, fontSize: '0.75rem' }}
              >
                {item.content}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', display: 'block', lineHeight: 1.4, fontSize: '0.75rem' }}
              >
                {item.contentEn}
              </Typography>

              
            </Box>
          ))}
        </Box>
      </CardContent>

      {/* CSS Animation for urgent pulse */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </Card>
  );
};

export default Announcements;