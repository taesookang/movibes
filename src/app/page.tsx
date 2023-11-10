import { TypographyH1, TypographyH3 } from '@/components/typography';
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <TypographyH1 className="text-center">
          Your World of Movie Exploration
        </TypographyH1>
        <TypographyH3 className="text-center font-light">
          Ready to watch? Enter your email to create or restart your membership.
        </TypographyH3>
        <div className='w-full flex items-center justify-center'>
        <Button>
          Get Started
        </Button>
        </div>
      </div>
      <div>

      </div>
    </main>
  );
}
