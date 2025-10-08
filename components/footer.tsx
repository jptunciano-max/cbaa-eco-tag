import { Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="w-fit">
              <Leaf className="w-3 h-3 mr-1" />
              UNP CBAA EcoTag
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} University of Northern Philippines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
