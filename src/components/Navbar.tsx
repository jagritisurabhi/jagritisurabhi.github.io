import { Group, Button, Box, Text, ActionIcon } from '@mantine/core';
import { IconPhone, IconSun, IconMoon } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/logo.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ 
      backgroundColor: 'var(--mantine-color-body)',
      borderBottom: '1px solid var(--mantine-color-default-border)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Group justify="space-between" py="md" px="xl">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Group>
            <Group>
              <Box
                style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0'
                }}
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 80V30L50 50L80 20V90"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className="logo-path"
                  />
                  <path
                    d="M20 80V30L50 50L80 20V90"
                    stroke="#FF0000"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    style={{ opacity: 0.5 }}
                    className="logo-path-red"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="20" y1="20" x2="80" y2="80">
                      <stop offset="0%" stopColor={theme === 'dark' ? '#FFD700' : '#8B5CF6'} />
                      <stop offset="100%" stopColor={theme === 'dark' ? '#FFA500' : '#C4B5FD'} />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
              <div>
                <Text size="xl" fw={700} style={{ color: 'var(--mantine-color-text)', marginLeft: '-16px' }}>
                  Red Mango
                </Text>
                <Text size="sm" c="dimmed" style={{ marginTop: '-5px', marginLeft: '-16px' }}>
                  Tech Solutions
                </Text>
              </div>
            </Group>
          </Group>
        </Link>

        <Group gap="md">
          <Button 
            component={Link} 
            to="/calculator" 
            variant="subtle" 
            size="md"
            style={{ 
              color: theme === 'dark' ? '#FFD700' : 'inherit'
            }}
          >
            Price Calculator
          </Button>
          <Button 
            variant="filled" 
            size="md"
            leftSection={<IconPhone size={16} />}
            component={Link}
            to="/contact"
            style={{
              backgroundColor: '#8B5CF6',
              borderRadius: '20px'
            }}
          >
            Call us
          </Button>
          <ActionIcon
            variant="default"
            size="lg"
            radius="md"
            onClick={toggleTheme}
            aria-label="Toggle color scheme"
          >
            {theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
          </ActionIcon>
        </Group>
      </Group>
    </nav>
  );
};

export default Navbar; 