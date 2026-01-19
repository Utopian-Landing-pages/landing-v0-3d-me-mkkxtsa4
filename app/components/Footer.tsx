'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { PROJECT_NAME, PROJECT_URL } from '@/lib/constants'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const quickLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">{PROJECT_NAME}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered 3D design, printing, and shipping platform. Design without limits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Get Started
            </h4>
            <Button asChild className="w-full">
              <a href={PROJECT_URL}>Create Account</a>
            </Button>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PROJECT_NAME}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
