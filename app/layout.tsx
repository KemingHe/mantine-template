import '@mantine/core/styles.css';

import type { JSX } from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import type { LayoutProps } from '@/types/app-props';

export { metadata } from '@/app-config/metadata';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
};

export default Layout;
