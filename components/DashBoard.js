import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CustomAppBar from './AppBar';
import logo from './logo_children.png';

const demoTheme = createTheme({
    palette: {
      primary: {
        main: '#3b82f6',
      },
      secondary: {
        main: '#ef4444',
      },
      background: {
        default: '#f0f4f8',
      },
      appbarcolor: {
        default: '#dbb6d3',
      },
      text: {
        primary: '#111827',
      },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
});

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashBoard(props) {
  const { window } = props;

  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider window={window}>
        <CustomAppBar />
        <PageContainer>
          <Grid container alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
            <Grid item>
              <img src={logo} alt="Логотип" style={{ height: '60px', marginRight: '16px' }} />
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h1">
                Смартик
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" align="center" sx={{ mt: 2, color: '#666' }}>
            Мы предлагаем разнообразные программы для развития ваших детей!
          </Typography>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Skeleton height={200} />
              <Typography variant="h5" align="center" sx={{ mt: 2 }}>
                Программа 1
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Skeleton height={200} />
              <Typography variant="h5" align="center" sx={{ mt: 2 }}>
                Программа 2
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Skeleton height={200} />
              <Typography variant="h5" align="center" sx={{ mt: 2 }}>
                Программа 3
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Skeleton height={200} />
              <Typography variant="h5" align="center" sx={{ mt: 2 }}>
                Программа 4
              </Typography>
            </Grid>
          </Grid>
        </PageContainer>
      </AppProvider>
    </ThemeProvider>
  );
}
