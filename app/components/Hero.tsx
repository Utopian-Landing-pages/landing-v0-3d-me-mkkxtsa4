import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-gradient-shift"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            AI 3D Models, Printed & Shipped.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance">
            Design, print, and ship professional-grade 3D models without owning a printer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href={PROJECT_URL}>Get Started</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to features"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
