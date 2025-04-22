import { Container, Title, Text, SimpleGrid, Card, Button, Group, Stack } from '@mantine/core';
import { IconBrandPython, IconShieldLock, IconPalette, IconDatabase, IconCloud, IconTestPipe, IconArrowRight } from '@tabler/icons-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { useTheme } from '../context/ThemeContext';

const services = [
  {
    title: 'Python Development',
    description: 'Django, Flask, Web Scraping, Machine Learning, and AI integration services.',
    icon: <IconBrandPython size={40} stroke={1.5} />,
    color: 'blue'
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive QA processes, testing methodologies, and quality control.',
    icon: <IconTestPipe size={40} stroke={1.5} />,
    color: 'green'
  },
  {
    title: 'Penetration Testing',
    description: 'Security assessment and vulnerability testing to protect your systems.',
    icon: <IconShieldLock size={40} stroke={1.5} />,
    color: 'red'
  },
  {
    title: 'Graphic Design',
    description: 'Professional design services for web and print media.',
    icon: <IconPalette size={40} stroke={1.5} />,
    color: 'violet'
  },
  {
    title: 'Big Data Management',
    description: 'Data processing, analytics, and management solutions.',
    icon: <IconDatabase size={40} stroke={1.5} />,
    color: 'indigo'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Terraform, CI/CD, cloud infrastructure, and automation solutions.',
    icon: <IconCloud size={40} stroke={1.5} />,
    color: 'cyan'
  },
];

const Home = () => {
  const titleText = "Transform Your Business with Modern Technology";
  const animatedTitle = useTypingAnimation(titleText);
  const { theme } = useTheme();

  return (
    <Container size="lg" py="xl">
      <Stack align="center" gap="xl" style={{ textAlign: 'center', padding: '80px 0' }}>
        <Title 
          order={1} 
          size="3.5rem" 
          fw={900}
          style={{ 
            lineHeight: 1.2,
            color: theme === 'dark' ? '#FFD700' : '#228be6',
            transition: 'color 0.3s ease',
            minHeight: '4.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {animatedTitle}
        </Title>
        
        <Text 
          size="xl" 
          style={{ 
            maxWidth: '800px',
            color: 'var(--mantine-color-text)',
            lineHeight: 1.6
          }}
        >
          We help businesses leverage cutting-edge technology to drive growth, 
          improve efficiency, and stay ahead of the competition.
        </Text>

        <Group>
          <Button 
            size="lg" 
            rightSection={<IconArrowRight size={20} />}
            variant="gradient"
            gradient={theme === 'dark' 
              ? { from: '#FFD700', to: '#FFA500' }
              : { from: 'blue', to: 'cyan' }
            }
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="default"
            onClick={() => {
              document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </Group>
      </Stack>

      {/* Services Section */}
      <Title order={2} ta="center" style={{ marginBottom: '40px', color: 'var(--mantine-color-text)' }} id="services-section">
        Our Services
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {services.map((service, index) => (
          <Card 
            key={index} 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            withBorder
            style={{ 
              transition: 'transform 0.2s',
              backgroundColor: 'var(--mantine-color-body)',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Group justify="center" mb="md">
              <div style={{ 
                padding: '15px', 
                borderRadius: '50%', 
                backgroundColor: `var(--mantine-color-${service.color}-light)`,
                color: `var(--mantine-color-${service.color}-6)`
              }}>
                {service.icon}
              </div>
            </Group>
            <Title order={3} ta="center" style={{ marginBottom: '10px', color: 'var(--mantine-color-text)' }}>
              {service.title}
            </Title>
            <Text ta="center" style={{ color: 'var(--mantine-color-text)' }}>
              {service.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home; 