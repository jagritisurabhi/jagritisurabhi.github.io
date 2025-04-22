import { Container, Title, Text, SimpleGrid, Card, Group } from '@mantine/core';
import { IconRocket, IconUsers, IconChartBar } from '@tabler/icons-react';

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve with innovative solutions and cutting-edge technologies.',
    icon: <IconRocket size={40} stroke={1.5} />,
    color: 'blue'
  },
  {
    title: 'Team Excellence',
    description: 'Our team of experts brings years of experience and dedication to every project.',
    icon: <IconUsers size={40} stroke={1.5} />,
    color: 'green'
  },
  {
    title: 'Growth Focus',
    description: 'We help businesses grow through scalable solutions and strategic planning.',
    icon: <IconChartBar size={40} stroke={1.5} />,
    color: 'violet'
  },
];

const About = () => {
  return (
    <Container size="lg" py="xl">
      {/* Hero Section */}
      <div style={{ 
        padding: '80px 0', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: '20px',
        marginBottom: '40px'
      }}>
        <Title order={1} style={{ marginBottom: '20px', color: '#2c3e50' }}>
          About RedMango
        </Title>
        <Text size="xl" style={{ marginBottom: '30px', color: '#34495e', maxWidth: '800px', margin: '0 auto 30px' }}>
          RedMango is a leading technology solutions provider specializing in software development,
          web applications, and IT services. With years of experience in the industry, we help
          businesses transform their ideas into reality through cutting-edge technology solutions.
        </Text>
      </div>

      {/* Values Section */}
      <Title order={2} ta="center" style={{ marginBottom: '40px', color: '#2c3e50' }}>
        Our Values
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {values.map((value, index) => (
          <Card 
            key={index} 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            withBorder
            style={{ 
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Group justify="center" mb="md">
              <div style={{ 
                padding: '15px', 
                borderRadius: '50%', 
                backgroundColor: `var(--mantine-color-${value.color}-light)`,
                color: `var(--mantine-color-${value.color}-6)`
              }}>
                {value.icon}
              </div>
            </Group>
            <Title order={3} ta="center" style={{ marginBottom: '10px', color: '#2c3e50' }}>
              {value.title}
            </Title>
            <Text ta="center" c="dimmed">
              {value.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default About; 