import type { ReactNode } from 'react';
import { render as testingLibraryRender, type RenderResult } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';

export const render = (ui: ReactNode): RenderResult => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
};
