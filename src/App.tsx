import { MantineProvider, AppShell, createTheme, MantineTheme } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PriceCalculator from './pages/PriceCalculator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const theme = createTheme({
  components: {
    Button: {
      styles: {
        root: {
          '&:hover': {
            transform: 'scale(1.05) translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.2s ease-in-out'
          }
        },
        gradient: {
          '&:hover': {
            transform: 'scale(1.05) translateY(-2px)',
            boxShadow: (theme: MantineTheme & { colorScheme: 'light' | 'dark' }) => {
              const isDark = theme.colorScheme === 'dark';
              return isDark 
                ? '0 6px 12px rgba(255, 165, 0, 0.4)'  // Darker orange shadow for dark theme
                : '0 6px 12px rgba(0, 0, 0, 0.3)';      // Regular shadow for light theme
            },
            transition: 'all 0.2s ease-in-out'
          }
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Router>
          <AppShell header={{ height: 60 }}>
            <AppShell.Header>
              <Navbar />
            </AppShell.Header>
            <AppShell.Main style={{ paddingBottom: '60px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/calculator" element={<PriceCalculator />} />
              </Routes>
            </AppShell.Main>
          </AppShell>
          <Footer />
        </Router>
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App; 