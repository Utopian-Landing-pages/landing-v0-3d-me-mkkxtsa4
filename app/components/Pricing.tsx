import { Lightbulb, Settings, Package } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

const steps = [
  {
    icon: Lightbulb,
    title: 'Step 1: Design with AI',
    description: 'Describe your 3D model idea using AI prompts. Our advanced AI will generate a design for you in seconds.',
  },
  {
    icon: Settings,
    title: 'Step 2: Select Material & Scale',
    description: 'Select your desired material and scale. Choose from a wide range of high-quality materials.',
  },
  {
    icon: Package,
    title: 'Step 3: Print & Ship',
    description: 'We professionally print and ship your model. Your finished 3D model arrives at your door in days.',
  },
]

export function Pricing() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Get your custom 3D models in three simple steps. From design to delivery, we make it effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative border-2">
                <CardHeader>
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-lg">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <a href={PROJECT_URL}>Start Creating Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
