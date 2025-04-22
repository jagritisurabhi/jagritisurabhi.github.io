import { Container, Title, Text, Card, NumberInput, Select, Button, Stack, Group } from '@mantine/core';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const PriceCalculator = () => {
  const [hours, setHours] = useState<number | ''>(0);
  const [service, setService] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const { theme } = useTheme();

  const serviceRates = {
    'web-development': 150,
    'mobile-development': 175,
    'cloud-services': 200,
    'consulting': 250,
  };

  const calculatePrice = () => {
    if (service && hours) {
      const rate = serviceRates[service as keyof typeof serviceRates];
      setTotalPrice(rate * Number(hours));
    }
  };

  const handleHoursChange = (value: string | number) => {
    setHours(typeof value === 'string' ? '' : value);
  };

  return (
    <Container size="sm" py="xl" style={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '100px' }}>
      <Title ta="center" mb="xl" style={{ color: theme === 'dark' ? '#FFD700' : '#2D3748' }}>
        Price Calculator
      </Title>
      <Text size="lg" c="dimmed" ta="center" mb="xl">
        Calculate the estimated cost for your project
      </Text>

      <Card 
        shadow="sm" 
        padding="xl" 
        radius="md" 
        withBorder
        style={{ 
          backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-7)' : 'white',
          borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
        }}
      >
        <Stack gap="md">
          <Select
            label="Select Service"
            placeholder="Choose a service"
            data={[
              { value: 'web-development', label: 'Web Development ($150/hr)' },
              { value: 'mobile-development', label: 'Mobile Development ($175/hr)' },
              { value: 'cloud-services', label: 'Cloud Services ($200/hr)' },
              { value: 'consulting', label: 'Technical Consulting ($250/hr)' },
            ]}
            value={service}
            onChange={setService}
            styles={{
              input: {
                backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-6)' : 'white',
                borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
              }
            }}
          />

          <NumberInput
            label="Estimated Hours"
            placeholder="Enter number of hours"
            min={0}
            value={hours}
            onChange={handleHoursChange}
            styles={{
              input: {
                backgroundColor: theme === 'dark' ? 'var(--mantine-color-dark-6)' : 'white',
                borderColor: theme === 'dark' ? 'var(--mantine-color-dark-4)' : 'var(--mantine-color-gray-3)'
              }
            }}
          />

          <Button 
            onClick={calculatePrice}
            size="lg"
            variant="gradient"
            gradient={theme === 'dark' 
              ? { from: '#FFD700', to: '#FFA500' }
              : { from: 'blue', to: 'cyan' }
            }
          >
            Calculate Price
          </Button>

          {totalPrice !== null && (
            <Group justify="center" mt="md">
              <Text size="xl" fw={700} style={{ color: theme === 'dark' ? '#FFD700' : '#2D3748' }}>
                Estimated Total: ${totalPrice.toLocaleString()}
              </Text>
            </Group>
          )}
        </Stack>
      </Card>
    </Container>
  );
};

export default PriceCalculator; 