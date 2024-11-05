import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import logotype from './logo_text.png';

const menuItems = [
  {
    title: 'О нас',
    children: [
      'О детском Центре Смартик',
      'Публичный договор',
      'Политика конфиденциальности',
      'Скидки и акции',
      'Новости',
      'Отзывы',
      'Вакансии',
    ],
  },
  {
    title: 'Курсы и кружки',
    children: [
      'Раннее развитие (1,2-4 лет)',
      'Ступеньки к школе (5-7 лет)',
      'ОНЛАЙН-Ступеньки к школе (5-7 лет)',
      'Английский язык (4-16 лет)',
      'Немецкий язык (4-16 лет)',
      'Живопись (5-16 лет)',
      'В помощь школьнику (1-4 класс)',
      'Обучение чтению за 12 уроков',
      'Мастер-классы (5-18 лет)',
    ],
  },
  {
    title: 'Прайс',
    children: [
      'Стоимость занятий',
      'Способы оплаты'
    ]
  },
];

export default function CustomAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#dbb6d3' }}>
        <Toolbar>
          <IconButton edge="start" color="black" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="logo" href="/" style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            <img src={logotype} alt="Логотип" style={{ height: '100px' }} />
          </IconButton>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            color="primary"
            sx={{ position: 'absolute', right: '20px' }}>
            Аккаунт
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
          <IconButton
            onClick={toggleDrawer}
            aria-label="close"
            sx={{ color: 'black' }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <List sx={{ width: 300, padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Меню
          </Typography>
          <Divider />
          {menuItems.map((item, index) => (
            <Accordion key={index} sx={{ boxShadow: 'none', backgroundColor: 'inherit' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List disablePadding>
                  {item.children.map((child, childIndex) => (
                    <ListItem key={childIndex} sx={{ pl: 4 }}>
                      <ListItemText primary={child} primaryTypographyProps={{ color: 'textSecondary' }} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      </Drawer>
    </>
  );
}
