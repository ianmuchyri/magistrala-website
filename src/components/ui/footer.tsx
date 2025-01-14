import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">IoT Platform</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connecting devices, sharing data, and visualizing insights with our powerful IoT platform built for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="#features" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link 
                href="#faq" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link 
                href="#use-cases" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Use Cases
              </Link>
              <Link 
                href="#pricing" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:info@iotplatform.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@iotplatform.com
              </a>
              <a 
                href="tel:+11234567890" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +1 (123) 456-7890
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="w-fit px-0 hover:bg-transparent" asChild>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </Button>
              <Button variant="ghost" className="w-fit px-0 hover:bg-transparent" asChild>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" className="w-fit px-0 hover:bg-transparent" asChild>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Magistrala. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
