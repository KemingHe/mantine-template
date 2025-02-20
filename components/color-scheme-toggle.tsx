'use client';

import type { JSX } from 'react';
import { Button, Group, useMantineColorScheme } from '@mantine/core';

export const ColorSchemeToggle = (): JSX.Element => {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
};
