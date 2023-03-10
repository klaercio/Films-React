import { BrowserRouter, Link, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/';
import Router from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {

  return (
   <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle/>
   </ThemeProvider>
  )
}

export default App