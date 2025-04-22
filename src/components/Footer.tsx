import { Text, Group, Anchor, Box } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import { useScrollToBottom } from '../hooks/useScrollToBottom';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/logo.css';

const Footer = () => {
  const isBottom = useScrollToBottom();
  const { theme } = useTheme();

  return (
    <footer style={{ 
      backgroundColor: 'var(--mantine-color-body)',
      borderTop: '1px solid var(--mantine-color-default-border)',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      transform: isBottom ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 1000,
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Group justify="space-between" py="sm" px="xl">
        {/* Logo and Text */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Group>
            <Group>
              <Box
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0'
                }}
              >
                <svg
                  width="36"
                  height="36"
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
                  />
                  <path
                    d="M20 80V30L50 50L80 20V90"
                    stroke="#FF0000"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    style={{ opacity: 0.5 }}
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
                <Text size="lg" fw={700} style={{ color: 'var(--mantine-color-text)', marginLeft: '-16px' }}>
                  Red Mango
                </Text>
                <Text size="xs" c="dimmed" style={{ marginTop: '-5px', marginLeft: '-16px' }}>
                  Tech Solutions
                </Text>
              </div>
            </Group>
          </Group>
        </Link>

        {/* Links and Social Links */}
        <Group>
          <Group gap="xs">
            <Anchor href="/about" c="dimmed" size="sm">About</Anchor>
            <Anchor href="/privacy" c="dimmed" size="sm">Privacy Policy</Anchor>
            <Anchor href="/terms" c="dimmed" size="sm">Terms</Anchor>
          </Group>
          <Group gap="xs">
            <Anchor href="https://github.com" target="_blank" rel="noopener noreferrer">
              <IconBrandGithub size={18} stroke={1.5} color="var(--mantine-color-text)" />
            </Anchor>
            <Anchor href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin size={18} stroke={1.5} color="var(--mantine-color-text)" />
            </Anchor>
            <Anchor href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <IconBrandTwitter size={18} stroke={1.5} color="var(--mantine-color-text)" />
            </Anchor>
          </Group>
        </Group>
      </Group>
    </footer>
  );
};

export default Footer; 