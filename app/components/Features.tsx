import { Brain, Printer, Layers, Truck, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Design',
    description: 'Generate stunning 3D models with simple text prompts using our advanced AI.',
  },
  {
    icon: Printer,
    title: 'Professional Printing',
    description: 'We handle the printing process with state-of-the-art equipment and expert technicians.',
  },
  {
    icon: Layers,
    title: 'Wide Range of Materials',
    description: 'Choose from a variety of high-quality materials to bring your designs to life.',
  },
  {
    icon: Truck,
    title: 'Hassle-Free Shipping',
    description: 'Your finished 3D models are carefully packaged and shipped directly to your door.',
  },
  {
    icon: CheckCircle,
    title: 'No Printer Maintenance',
    description: 'Forget about the costs and headaches of printer ownership and maintenance.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose 3D Me?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the future of 3D printing with our comprehensive platform that handles everything from design to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
