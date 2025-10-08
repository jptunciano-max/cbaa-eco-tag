import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Sprout, Palmtree } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabaseClient"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollToTop } from "@/components/scroll-to-top"

const iconMap = {
  leaf: Leaf,
  pine: TreePine,
  sprout: Sprout,
  palmtree: Palmtree,
} as const

export default async function HomePage() {
  // Fallback data mirrors your current static homepage
  const fallback = [
    {
      id: "acacia",
      name: "Acacia Tree",
      scientific_name: "Acacia auriculiformis",
      description: "Fast-growing tree that helps prevent soil erosion and provides excellent shade.",
      image_url: "/acacia-tree-in-tropical-setting.jpg",
      icon: "pine",
    },
    {
      id: "mahogany",
      name: "Mahogany Tree",
      scientific_name: "Swietenia macrophylla",
      description: "Valuable hardwood tree that supports biodiversity and carbon sequestration.",
      image_url: "/mahogany-tree-in-forest.jpg",
      icon: "sprout",
    },
    {
      id: "rubber-tree",
      name: "Rubber Tree",
      scientific_name: "Hevea brasiliensis",
      description: "Source of natural rubber and an important species in tropical plantations.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "eucalyptus",
      name: "Eucalyptus Tree",
      scientific_name: "Eucalyptus globulus",
      description: "Fast-growing tree known for its aromatic leaves and essential oils.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "flame-tree",
      name: "Flame Tree",
      scientific_name: "Delonix regia",
      description: "Ornamental palm with bushy fronds, often planted in tropical landscapes.",
      image_url: "/placeholder.jpg",
      icon: "palmtree",
    },
    {
      id: "umbrella-tree",
      name: "Umbrella Tree",
      scientific_name: "Schefflera actinophylla",
      description: "Popular ornamental tree with umbrella-like leaf clusters.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "mango",
      name: "Mango Tree",
      scientific_name: "Mangifera indica",
      description: "Fruit-bearing tree cultivated widely for its sweet and nutritious mangoes.",
      image_url: "/placeholder.jpg",
      icon: "sprout",
    },
    {
      id: "tamarind",
      name: "Tamarind Tree",
      scientific_name: "Tamarindus indica",
      description: "Tropical tree producing tangy fruit used in cooking and traditional medicine.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "indian-mast",
      name: "Indian Mast Tree",
      scientific_name: "Polyalthia longifolia",
      description: "Tall ornamental tree often used for avenue planting and windbreaks.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "balete",
      name: "Balete Tree",
      scientific_name: "Ficus benjamina",
      description: "Large fig tree species considered sacred in many Filipino traditions.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "narra-tree",
      name: "Narra Tree",
      scientific_name: "Pterocarpus indicus",
      description: "Native shade tree with spreading branches, often planted in parks.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "star-apple-tree",
      name: "Star Apple Tree",
      scientific_name: "Chrysophyllum cainito",
      description: "Palm tree with fishtail-shaped leaves, commonly used for landscaping.",
      image_url: "/placeholder.jpg",
      icon: "palmtree",
    },
    {
      id: "gmelina",
      name: "Gmelina Tree",
      scientific_name: "Gmelina arborea",
      description: "Fast-growing hardwood tree widely used for timber and reforestation.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "betel-palm",
      name: "Betel Palm",
      scientific_name: "Areca catechu",
      description: "Palm tree whose seeds (areca nuts) are commonly chewed with betel leaves.",
      image_url: "/placeholder.jpg",
      icon: "palmtree",
    },
    {
      id: "coconut-palm",
      name: "Coconut Palm",
      scientific_name: "Dypsis lutescens",
      description: "Elegant clustering palm often used indoors and outdoors for ornamental purposes.",
      image_url: "/placeholder.jpg",
      icon: "palmtree",
    },
  ] as const

  const { data, error } = await supabase
    .from("trees")
    .select("id, name, scientific_name, description, image_url, icon")
    .order("name", { ascending: true })

  const trees = (data && data.length > 0 ? data : fallback)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Nature Background Patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large organic shapes */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-green-300/60 to-emerald-300/60 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-0 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-bl from-lime-300/60 to-green-300/60 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/4 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-tr from-emerald-300/60 to-lime-300/60 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-tl from-green-300/60 to-emerald-300/60 rounded-full blur-3xl animate-pulse delay-3000" />
        
        {/* Medium floating shapes */}
        <div className="absolute top-10 right-1/4 w-16 h-16 sm:top-20 sm:w-32 sm:h-32 bg-green-400/50 rounded-full blur-2xl animate-bounce delay-500" />
        <div className="absolute top-1/2 left-4 w-12 h-12 sm:left-20 sm:w-24 sm:h-24 bg-emerald-400/50 rounded-full blur-2xl animate-bounce delay-1500" />
        <div className="absolute bottom-10 right-4 w-14 h-14 sm:bottom-20 sm:right-20 sm:w-28 sm:h-28 bg-lime-400/50 rounded-full blur-2xl animate-bounce delay-2500" />
        <div className="absolute bottom-1/2 left-1/3 w-10 h-10 sm:w-20 sm:h-20 bg-green-400/50 rounded-full blur-2xl animate-bounce delay-3500" />
        
      </div>
      
      <MobileNav />
      
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden z-10">
        {/* Organic background shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-primary/10 organic-blob float-animation" />
          <div className="absolute top-20 right-4 w-24 h-24 sm:top-40 sm:right-20 sm:w-48 sm:h-48 bg-accent/15 organic-blob-2 pulse-eco" />
          <div className="absolute bottom-10 left-1/4 w-16 h-16 sm:bottom-20 sm:left-1/3 sm:w-32 sm:h-32 bg-secondary/20 organic-blob" />
        </div>

        <div className="container mx-auto px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:py-24">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto text-xs sm:text-sm">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              University of Northern Philippines
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="text-primary">CBAA</span> Eco Tag
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto px-2">
              Trees of UNP, mas cool pa sa aircon, mas reliable pa sa WI-FI - <strong>SCAN. LEARN. ACT</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              The University of Northern Philippines continues to rise as a center of innovation and development, 
              building new infrastructures that shape the future of education. Yet amid its modern growth, UNP 
              remains deeply rooted in its care for the environment. Through initiatives like the EcoTag Project, 
              the university demonstrates that progress and preservation can go hand in hand. Each building stands 
              beside thriving trees that tell stories of sustainability, proving that UNP doesn't just build for 
              people—<strong>it builds with nature</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Tree Selection Section */}
      <section id="trees" className="py-12 sm:py-16 lg:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Discover Our <span className="text-primary">Trees</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Select a tree to learn more about its unique characteristics and environmental benefits
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {trees.map((tree) => {
              const IconComponent = iconMap[(tree.icon as keyof typeof iconMap) ?? "leaf"] ?? Leaf
              return (
                <Link key={tree.id} href={`/tree/${tree.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group relative overflow-hidden">
                    {/* Nature hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-emerald-50/0 to-lime-50/0 group-hover:from-green-50/20 group-hover:via-emerald-50/10 group-hover:to-lime-50/20 transition-all duration-500 z-10" />
                    
                    {/* Floating nature elements on hover */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-green-400/0 group-hover:bg-green-400/60 rounded-full transition-all duration-700 delay-100 group-hover:animate-ping" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400/0 group-hover:bg-emerald-400/60 rounded-full transition-all duration-700 delay-200 group-hover:animate-ping" />
                    <div className="absolute top-1/2 left-2 w-1 h-1 bg-lime-400/0 group-hover:bg-lime-400/60 rounded-full transition-all duration-700 delay-300 group-hover:animate-ping" />
                    
                    <CardContent className="p-0 relative z-20">
                      <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-lg">
                        {/* Nature overlay on image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/0 via-transparent to-transparent group-hover:from-green-900/20 transition-all duration-500 z-10" />
                        <img
                          src={(tree as any).image_url || (tree as any).image || "/placeholder.svg"}
                          alt={tree.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                            <IconComponent className="w-5 h-5 text-primary group-hover:text-green-600 transition-colors duration-300" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h3 className="text-xl font-semibold group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                              {tree.name}
                            </h3>
                            <p className="text-sm text-muted-foreground italic group-hover:text-green-700 transition-colors duration-300">
                              {(tree as any).scientific_name || (tree as any).scientificName}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {tree.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-10 sm:py-14 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden z-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary-foreground/10 organic-blob-2" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-foreground/10 organic-blob" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">About CBAA EcoTag</h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 text-pretty">
              Discover how we're bridging technology, education, and sustainability at the University of Northern
              Philippines through our innovative tree tagging initiative.
            </p>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold">QR Technology</div>
                <div className="text-primary-foreground/80">Interactive Learning</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold">Environmental</div>
                <div className="text-primary-foreground/80">Sustainability Focus</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold">Education</div>
                <div className="text-primary-foreground/80">Knowledge Sharing</div>
              </div>
            </div>
            <Link href="/about">
              <Button size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90 border border-primary-foreground/20">
                Learn About Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
