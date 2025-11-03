import { Box, Container, Typography, Paper, Divider } from '@mui/material';

const ZubayrInfo = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            background: 'linear-gradient(135deg, #1F4A3D 0%, #2E7D32 100%)',
            borderRadius: 3,
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{ color: 'white', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}
          >
            الزُّبَيْرُ بْنُ العَوَّامِ
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{ color: 'secondary.main' }}
          >
            حَوَارِيُّ رَسُولِ اللهِ وَأَحَدُ العَشَرَةِ المُبَشَّرِينَ بِالجَنَّةِ
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3, textAlign: 'right' }}>
            نَسَبُهُ الشَّرِيف
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            هُوَ الزُّبَيْرُ بْنُ العَوَّامِ بْنِ خُوَيْلِدِ بْنِ أَسَدِ بْنِ عَبْدِ العُزَّى بْنِ قُصَيٍّ القُرَشِيُّ الأَسَدِيُّ، 
            أَبُو عَبْدِ اللهِ. يَلْتَقِي نَسَبُهُ مَعَ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فِي قُصَيِّ بْنِ كِلَابٍ. 
            أُمُّهُ صَفِيَّةُ بِنْتُ عَبْدِ المُطَّلِبِ عَمَّةُ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَزَوْجَتُهُ أَسْمَاءُ بِنْتُ أَبِي بَكْرٍ 
            الصِّدِّيقِ رَضِيَ اللهُ عَنْهُمَا.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3, textAlign: 'right' }}>
            إِسْلَامُهُ وَجِهَادُهُ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            أَسْلَمَ الزُّبَيْرُ وَهُوَ ابْنُ سِتَّ عَشْرَةَ سَنَةً، وَكَانَ مِنَ السَّابِقِينَ الأَوَّلِينَ إِلَى الإِسْلَامِ، فَهُوَ رَابِعٌ 
            أَوْ خَامِسٌ مَنْ أَسْلَمَ. عَذَّبَهُ عَمُّهُ نَوْفَلُ بْنُ خُوَيْلِدٍ بَعْدَ إِسْلَامِهِ، فَكَانَ يُعَلِّقُهُ فِي حَصِيرٍ وَيُدَخِّنُ عَلَيْهِ بِالنَّارِ 
            وَيَقُولُ: ارْجِعْ إِلَى الكُفْرِ، فَيَقُولُ: لَا أَكْفُرُ أَبَدًا.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            شَهِدَ الزُّبَيْرُ بَدْرًا وَالمَشَاهِدَ كُلَّهَا مَعَ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. وَكَانَ أَوَّلَ مَنْ سَلَّ سَيْفَهُ 
            فِي سَبِيلِ اللهِ. وَقَدْ قَالَ فِيهِ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: "لِكُلِّ نَبِيٍّ حَوَارِيٌّ، وَحَوَارِيَّ الزُّبَيْرُ".
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3, textAlign: 'right' }}>
            فَضَائِلُهُ وَمَنَاقِبُهُ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            • أَحَدُ العَشَرَةِ المُبَشَّرِينَ بِالجَنَّةِ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            • أَحَدُ السِّتَّةِ أَصْحَابِ الشُّورَى الَّذِينَ اخْتَارَهُمْ عُمَرُ بْنُ الخَطَّابِ رَضِيَ اللهُ عَنْهُ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            • حَوَارِيُّ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَابْنُ عَمَّتِهِ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            • مِنْ أَشْجَعِ الصَّحَابَةِ وَأَكْثَرِهِمْ إِقْدَامًا فِي الحُرُوبِ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            • كَانَ كَرِيمًا جَوَادًا، تَرَكَ ثَرْوَةً عَظِيمَةً تَصَدَّقَ بِهَا أَبْنَاؤُهُ
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3, textAlign: 'right' }}>
            شَجَاعَتُهُ وَبُطُولَاتُهُ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            فِي يَوْمِ اليَرْمُوكِ، كَانَ الزُّبَيْرُ فِي مُقَدِّمَةِ الجَيْشِ، وَقَدِ اخْتَرَقَ صُفُوفَ الرُّومِ مَرَّتَيْنِ وَهُوَ يُقَاتِلُ 
            بِبَسَالَةٍ نَادِرَةٍ. وَفِي فَتْحِ مِصْرَ، كَانَ لَهُ دَوْرٌ بَارِزٌ فِي النَّصْرِ. وَفِي مَعْرَكَةِ أُحُدٍ، دَافَعَ عَنِ النَّبِيِّ 
            صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ حَتَّى أُصِيبَ بِجِرَاحٍ كَثِيرَةٍ.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            قَالَتْ عَائِشَةُ رَضِيَ اللهُ عَنْهَا: "كَانَ عَلَى الزُّبَيْرِ يَوْمَ أُحُدٍ دِرْعَانِ، فَنَهَضَ إِلَى الصَّخْرَةِ فَلَمْ يَسْتَطِعْ، 
            فَأَقْعَدَ طَلْحَةَ تَحْتَهُ، فَصَعِدَ عَلَيْهِ حَتَّى اسْتَوَى عَلَى الصَّخْرَةِ".
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3, textAlign: 'right' }}>
            اسْتِشْهَادُهُ
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            اسْتُشْهِدَ الزُّبَيْرُ رَضِيَ اللهُ عَنْهُ فِي وَقْعَةِ الجَمَلِ سَنَةَ 36 هِجْرِيَّةً، وَهُوَ ابْنُ سَبْعٍ وَسِتِّينَ سَنَةً. 
            وَقَدْ قُتِلَ غَدْرًا وَهُوَ فِي طَرِيقِ عَوْدَتِهِ مِنَ المَعْرَكَةِ بَعْدَ أَنْ ذَكَّرَهُ عَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللهُ 
            عَنْهُ بِحَدِيثِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. قَتَلَهُ عَمْرُو بْنُ جُرْمُوزٍ غِيلَةً وَهُوَ يُصَلِّي.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'right' }}>
            وَلَمَّا بَلَغَ عَلِيًّا رَضِيَ اللهُ عَنْهُ مَقْتَلَ الزُّبَيْرِ قَالَ: "سَمِعْتُ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ 
            يَقُولُ: بَشِّرْ قَاتِلَ ابْنِ صَفِيَّةَ بِالنَّارِ". وَدُفِنَ بِوَادِي السِّبَاعِ قُرْبَ البَصْرَةِ.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #C3935B 0%, #D4AF37 100%)',
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            رَضِيَ اللهُ عَنِ الزُّبَيْرِ بْنِ العَوَّامِ وَأَرْضَاهُ
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ZubayrInfo;