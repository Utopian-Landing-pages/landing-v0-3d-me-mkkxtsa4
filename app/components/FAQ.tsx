'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does the AI-powered design process work?',
    answer: 'Simply provide a text prompt describing your desired 3D model, and our AI will generate a design for you. You can refine and adjust the design until it meets your exact specifications.',
  },
  {
    question: 'What materials are available for printing?',
    answer: 'We offer a wide range of materials, including plastics (PLA, ABS, PETG), resins (standard and engineering-grade), and metals, each with unique properties and finishes to suit your project needs.',
  },
  {
    question: 'What is the typical turnaround time for printing and shipping?',
    answer: 'Turnaround time depends on the complexity and size of the model, but most orders are processed and shipped within 3-5 business days. Rush options are available for urgent projects.',
  },
  {
    question: 'How do I get started with 3D Me?',
    answer: 'Simply create an account and start designing! Our platform is user-friendly and easy to navigate. You can begin with our AI design tool or upload your own 3D models.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
