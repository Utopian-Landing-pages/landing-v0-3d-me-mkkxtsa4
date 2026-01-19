'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Designer at Acme Corp',
    quote: '3D Me has revolutionized my workflow! The AI design tool is amazing, and the print quality is top-notch.',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'Engineer at Beta Industries',
    quote: "I'm incredibly impressed with the material options and the speed of delivery. 3D Me is a game changer.",
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Artist at Gamma Creations',
    quote: 'The convenience of having my 3D models printed and shipped without the hassle of owning a printer is priceless.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    role: 'Entrepreneur at Delta Solutions',
    quote: '3D Me has allowed me to quickly prototype and test my designs without a huge upfront investment.',
    rating: 5,
  },
  {
    name: 'Jessica Garcia',
    role: 'Architect at Epsilon Designs',
    quote: 'The AI integration is a fantastic addition. I can easily generate complex designs with minimal effort.',
    rating: 5,
  },
  {
    name: 'Kevin Rodriguez',
    role: 'Hobbyist at Zeta Crafts',
    quote: 'I love the quality and the ease of use! 3D Me makes 3D printing accessible to everyone.',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of satisfied customers who have transformed their 3D printing experience with 3D Me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-center text-foreground mb-8 leading-relaxed text-balance">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="text-center">
                <div className="font-semibold text-lg text-foreground">
                  {currentTestimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.role}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
