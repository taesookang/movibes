import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const TypographyH3: React.FC<Props> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  );
};

export default TypographyH3;
