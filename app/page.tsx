import type { ReactElement } from 'react';

import { ColorSchemeToggle } from '@/components/color-scheme-toggle';
import { Welcome } from '@/components/welcome';

const Page = (): ReactElement => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
};

export default Page;
