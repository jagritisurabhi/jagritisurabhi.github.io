import { Container, Title, Text, SimpleGrid, Card, TextInput, Textarea, Button, Group, Stack } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconClock } from '@tabler/icons-react';
import { useTheme } from '../context/ThemeContext';

const contactInfo = [
  {
    title: 'Email',
    value: 'contact@redmango.com',
    icon: <IconMail size={40} stroke={1.5} />,
    color: 'blue'
  },
  {
    title: 'Phone',
    value: '+1 (555) 123-4567',
    icon: <IconPhone size={40} stroke={1.5} />,
    color: 'green'
  },
  {
    title: 'Address',
    value: '123 Tech Street, Silicon Valley, CA 94025',
    icon: <IconMapPin size={40} stroke={1.5} />,
    color: 'red'
  },
  {
    title: 'Business Hours',
    value: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed',
    icon: <IconClock size={40} stroke={1.5} />,
    color: 'violet'
  },
];

const Contact = () => {
  const { theme } = useTheme();

  return (
    <Container size="lg" py="xl">
      {/* Hero Section */}
      <div style={{ 
        padding: '80px 0', 
        textAlign: 'center',
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: '20px',
        marginBottom: '40px'
      }}>
        <Title order={1} style={{ marginBottom: '20px', color: theme === 'dark' ? '#B8860B' : '#2c3e50' }}>
          Contact Us
        </Title>
        <Text size="xl" style={{ marginBottom: '30px', color: theme === 'dark' ? '#B8860B' : '#34495e' }}>
          Get in touch with our team for any inquiries or project discussions
        </Text>
      </div>

      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
        {/* Contact Form */}
        <Card 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-7)' : 'white',
            borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
          }}
        >
          <Title order={2} style={{ marginBottom: '30px', color: theme === 'dark' ? '#B8860B' : '#2c3e50' }}>
            Send us a Message
          </Title>
          <form>
            <Stack gap="md">
              <TextInput
                label="Name"
                placeholder="Your name"
                required
                styles={{
                  input: {
                    backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-6)' : 'white',
                    borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
                  }
                }}
              />
              <TextInput
                label="Email"
                placeholder="Your email"
                required
                styles={{
                  input: {
                    backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-6)' : 'white',
                    borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
                  }
                }}
              />
              <TextInput
                label="Subject"
                placeholder="Subject"
                required
                styles={{
                  input: {
                    backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-6)' : 'white',
                    borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
                  }
                }}
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                required
                minRows={4}
                styles={{
                  input: {
                    backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-6)' : 'white',
                    borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
                  }
                }}
              />
              <Button 
                type="submit" 
                fullWidth 
                size="lg"
                variant="gradient"
                gradient={theme === 'dark' 
                  ? { from: '#B8860B', to: '#8B6914' }
                  : { from: 'blue', to: 'cyan' }
                }
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Card>

        {/* Contact Information */}
        <div>
          <Title order={2} style={{ marginBottom: '30px', color: theme === 'dark' ? '#B8860B' : '#2c3e50' }}>
            Contact Information
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                shadow="sm" 
                padding="lg" 
                radius="md" 
                withBorder
                style={{ 
                  backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-7)' : 'white',
                  borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)',
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
                    backgroundColor: `var(--mantine-color-${info.color}-light)`,
                    color: `var(--mantine-color-${info.color}-6)`
                  }}>
                    {info.icon}
                  </div>
                </Group>
                <Title order={3} ta="center" style={{ marginBottom: '10px', color: theme === 'dark' ? '#B8860B' : '#2c3e50' }}>
                  {info.title}
                </Title>
                <Text ta="center" c="dimmed" style={{ whiteSpace: 'pre-line' }}>
                  {info.value}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Contact; 