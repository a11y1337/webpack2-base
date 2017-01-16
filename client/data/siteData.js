import icons from '../constants/icons';

const data = {
  brand: {
    palette: {
      main: 'rgb(144, 0, 35)'
    }
  },
  navconfig: [
    {
      name: 'home',
      icon: icons.MENU_BARS,
      iconEnabled: true,
      auth: false
    },
    {
      name: 'about',
      textEnabled: true,
      textStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize'
      },
      path: '/about',
      auth: false
    },
    {
      name: 'contact',
      icon: icons.INBOX,
      iconEnabled: true,
      auth: false
    },
  ],
  menulinks: [
    {
      name: 'home',
      path: '/home',
      auth: false
    },
    {
      name: 'about',
      path: '/about',
      auth: false
    },
    {
      name: 'contact',
      path: '/contact',
      auth: false
    },
  ]
};

export default data;
