import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/swift logo.png" 
              alt="Swift Energy Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm font-semibold text-foreground">Swift Energy</span>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025. Built with <Heart className="inline h-4 w-4 text-destructive" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>Powered by CK Education.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
