import { ColorSchemeToggle } from '@/components/color-scheme-toggle';
import { Welcome } from '@/components/welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
