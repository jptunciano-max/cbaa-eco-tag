"use client"

import { useState } from "react"
import { Menu, Leaf, TreePine, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      {/* Decorative organic blob behind button */}
      <div className="absolute -inset-2 bg-primary/10 rounded-full blur-sm animate-pulse" />
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 border-0"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-sm">
          {/* Decorative organic shapes */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 organic-blob-2" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/5 organic-blob" />
          </div>
          
          <SheetHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <SheetTitle className="text-left text-xl font-bold">CBAA EcoTag</SheetTitle>
            </div>
            <Badge variant="secondary" className="w-fit">
              <Leaf className="w-3 h-3 mr-2" />
              University of Northern Philippines
            </Badge>
          </SheetHeader>
          
          <div className="mt-8 space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-start text-base h-12 hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection("hero")}
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              Home
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start text-base h-12 hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection("trees")}
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <TreePine className="w-4 h-4 text-primary" />
              </div>
              Discover Trees
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start text-base h-12 hover:bg-primary/10 transition-all duration-300"
              onClick={() => scrollToSection("about")}
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <Users className="w-4 h-4 text-primary" />
              </div>
              About Us
            </Button>
            
            <div className="pt-4 border-t border-border/50">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn About Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
