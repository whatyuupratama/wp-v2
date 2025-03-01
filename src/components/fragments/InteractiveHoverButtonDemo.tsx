import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Link from 'next/link';

type SetButtonProps = {
  link: string;
  value: string;
  className?: string;
};
export function InteractiveHoverButtonDemo({
  link,
  value,
  className,
}: SetButtonProps) {
  return (
    <Link href={link} className={className}>
      <InteractiveHoverButton>{value}</InteractiveHoverButton>
    </Link>
  );
}
