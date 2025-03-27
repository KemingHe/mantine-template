'use client';

import { Button, Group, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconFileText, IconHistory, IconSettings } from '@tabler/icons-react';
import type { ReactElement } from 'react';

export const ChatPage = (): ReactElement => {
  const isMobile = useMediaQuery('(max-width: 62em)');

  const navItems = [
    { icon: <IconHistory size={20} />, label: 'History' },
    { icon: <IconFileText size={20} />, label: 'Documents' },
    { icon: <IconSettings size={20} />, label: 'Settings' },
  ];

  return (
    <Stack h="100vh" gap={0}>
      <Group h="100%" align="flex-start" wrap="nowrap">
        {/* Side navbar for desktop */}
        {!isMobile && (
          <Stack
            w={80}
            h="100%"
            p="md"
            gap="xl"
            style={{
              borderRight: '1px solid var(--mantine-color-gray-3)',
              background: 'var(--mantine-color-body)',
            }}
          >
            <Stack gap="md" align="center">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="subtle"
                  p="xs"
                  style={{ width: '100%' }}
                >
                  <Stack gap={4} align="center">
                    {item.icon}
                    <span style={{ fontSize: 'var(--mantine-font-size-xs)' }}>
                      {item.label}
                    </span>
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Stack>
        )}

        {/* Main content */}
        <Stack flex={1} p="md" style={{ overflow: 'auto' }}>
          <div>Chat Content</div>
        </Stack>
      </Group>

      {/* Bottom navbar for mobile */}
      {isMobile && (
        <Group
          p="xs"
          style={{
            borderTop: '1px solid var(--mantine-color-gray-3)',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'var(--mantine-color-body)',
          }}
          justify="space-around"
        >
          {navItems.map((item) => (
            <Button key={item.label} variant="subtle">
              <Stack gap={4} align="center">
                {item.icon}
                <span>{item.label}</span>
              </Stack>
            </Button>
          ))}
        </Group>
      )}
    </Stack>
  );
};
