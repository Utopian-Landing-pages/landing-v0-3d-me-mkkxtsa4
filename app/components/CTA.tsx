import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { PROJECT_URL } from '@/lib/constants'

const trustIndicators = [
  'No upfront equipment costs',
  'Professional-grade quality',
  'Fast turnaround times',
  'Secure & reliable shipping',
]

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Join thousands of designers, engineers, and creators who trust 3D Me for their 3D printing needs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 py-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {indicator}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" asChild className="text-lg px-10 py-6">
              <a href={PROJECT_URL}>Get Started Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
