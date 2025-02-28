import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Link from 'next/link';

export function InteractiveHoverButtonDemo() {
  return (
    <Link href='https://www.linkedin.com/in/wahyupratamaa/' passHref>
      <InteractiveHoverButton>More on my LinkedIn</InteractiveHoverButton>
    </Link>
  );
}
