
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#C0C0C0',
    },
    secondary: {
      main: '#E0E0E0',
    },
    error: {
      main: '#D74343',
    },
    text: {
      main: '#EEEEEE',
    },
  },
});

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

export default theme;
