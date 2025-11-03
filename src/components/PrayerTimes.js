import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, CircularProgress, Alert, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hijriDate, setHijriDate] = useState('');
  const [gregorianDate, setGregorianDate] = useState('');
  const [nextPrayer, setNextPrayer] = useState(null);
  const [countdown, setCountdown] = useState('');

  // Convert 24-hour time to 12-hour format
  const convertTo12Hour = (time24) => {
    const [hours, minutes] = time24.split(':');
    let hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        // Replace these coordinates with the mosque's actual location
        // Example: Cairo, Egypt coordinates
        const latitude = 30.0444;
        const longitude = 31.2357;
        const method = 5; 

        const response = await axios.get(
          `https://api.aladhan.com/v1/timings`,
          {
            params: {
              latitude,
              longitude,
              method,
            },
          }
        );

        const timings = response.data.data.timings;
        const date = response.data.data.date;

        setPrayerTimes({
          fajr: timings.Fajr,
          sunrise: timings.Sunrise,
          dhuhr: timings.Dhuhr,
          asr: timings.Asr,
          maghrib: timings.Maghrib,
          isha: timings.Isha,
        });

        setHijriDate(`${date.hijri.day} ${date.hijri.month.en} ${date.hijri.year}`);
        setGregorianDate(date.readable);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch prayer times. Please try again later.');
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  // Calculate next prayer and countdown
  useEffect(() => {
    if (!prayerTimes) return;

    const updateCountdown = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();

      const prayers = [
        { name: 'Fajr', time: prayerTimes.fajr },
        { name: 'Sunrise', time: prayerTimes.sunrise },
        { name: 'Dhuhr', time: prayerTimes.dhuhr },
        { name: 'Asr', time: prayerTimes.asr },
        { name: 'Maghrib', time: prayerTimes.maghrib },
        { name: 'Isha', time: prayerTimes.isha },
      ];

      // Convert prayer times to minutes
      const prayerMinutes = prayers.map((prayer) => {
        const [hours, minutes] = prayer.time.split(':').map(Number);
        return { ...prayer, minutes: hours * 60 + minutes };
      });

      // Find next prayer
      let next = prayerMinutes.find((prayer) => prayer.minutes > currentTime);
      
      if (!next) {
        // If no prayer left today, next is Fajr tomorrow
        next = { ...prayerMinutes[0], minutes: prayerMinutes[0].minutes + 24 * 60 };
      }

      setNextPrayer(next.name);

      // Calculate countdown
      const diff = next.minutes - currentTime;
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;
      
      setCountdown(`${hours}h ${minutes}m`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [prayerTimes]);

  if (loading) {
    return (
      <Card>
        <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
          <CircularProgress />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent>
          <Alert severity="error">{error}</Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
      <CardContent>
        <Typography variant="h3" component="h2" gutterBottom sx={{ color: 'white' }}>
          Prayer Times - مواقيت الصلاه
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {gregorianDate}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {hijriDate}
          </Typography>
        </Box>

        {/* Next Prayer Countdown */}
        {nextPrayer && (
          <Box
            sx={{
              mb: 3,
              p: 2,
              bgcolor: 'secondary.main',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon />
              <Typography variant="h6">Next: {nextPrayer}</Typography>
            </Box>
            <Chip
              label={countdown}
              sx={{
                bgcolor: 'white',
                color: 'secondary.main',
                fontWeight: 'bold',
              }}
            />
          </Box>
        )}

        {prayerTimes && Object.entries(prayerTimes).map(([prayer, time]) => {
          const isNext = prayer.toLowerCase() === nextPrayer?.toLowerCase();
          return (
            <Box
              key={prayer}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
                p: 2,
                bgcolor: isNext ? 'rgba(195, 147, 91, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                border: isNext ? '2px solid' : 'none',
                borderColor: 'secondary.main',
              }}
            >
              <Typography variant="h6" sx={{ textTransform: 'capitalize', color: 'white' }}>
                {prayer}
              </Typography>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: isNext ? 'bold' : 'normal' }}>
                {convertTo12Hour(time)}
              </Typography>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PrayerTimes;