'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import type { ReactElement } from 'react';

export const ColorSchemeToggle = (): ReactElement => {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
};
