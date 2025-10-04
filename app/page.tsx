import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Sprout, Palmtree } from "lucide-react";
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"

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
      description:
        "Fast-growing tree that helps prevent soil erosion and provides excellent shade.",
      image_url: "/acacia-tree-in-tropical-setting.jpg",
      icon: "pine",
    },
    {
      id: "mahogany",
      name: "Mahogany Tree",
      scientific_name: "Swietenia macrophylla",
      description:
        "Valuable hardwood tree that supports biodiversity and carbon sequestration.",
      image_url: "/mahogany-tree-in-forest.jpg",
      icon: "sprout",
    },
    {
      id: "rubber-tree",
      name: "Rubber Tree",
      scientific_name: "Hevea brasiliensis",
      description:
        "Source of natural rubber and an important species in tropical plantations.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "eucalyptus",
      name: "Eucalyptus Tree",
      scientific_name: "Eucalyptus globulus",
      description:
        "Fast-growing tree known for its aromatic leaves and essential oils.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "foxtail-palm",
      name: "Foxtail Palm",
      scientific_name: "Wodyetia bifurcata",
      description:
        "Ornamental palm with bushy fronds, often planted in tropical landscapes.",
      image_url: "/placeholder.jpg",
      icon: "palmtree",
    },
    {
      id: "umbrella-tree",
      name: "Umbrella Tree",
      scientific_name: "Schefflera actinophylla",
      description:
        "Popular ornamental tree with umbrella-like leaf clusters.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "mango",
      name: "Mango Tree",
      scientific_name: "Mangifera indica",
      description:
        "Fruit-bearing tree cultivated widely for its sweet and nutritious mangoes.",
      image_url: "/placeholder.jpg",
      icon: "sprout",
    },
    {
      id: "tamarind",
      name: "Tamarind Tree",
      scientific_name: "Tamarindus indica",
      description:
        "Tropical tree producing tangy fruit used in cooking and traditional medicine.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "indian-mast",
      name: "Indian Mast Tree",
      scientific_name: "Polyalthia longifolia",
      description:
        "Tall ornamental tree often used for avenue planting and windbreaks.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "balete",
      name: "Balete Tree",
      scientific_name: "Ficus benjamina",
      description:
        "Large fig tree species considered sacred in many Filipino traditions.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "dao",
      name: "Dao Tree",
      scientific_name: "Dracontomelon dao",
      description:
        "Native shade tree with spreading branches, often planted in parks.",
      image_url: "/placeholder.jpg",
      icon: "leaf",
    },
    {
      id: "fishtail-palm",
      name: "Fishtail Palm",
      scientific_name: "Caryota mitis",
      description:
        "Palm tree with fishtail-shaped leaves, commonly used for landscaping.",
      image_url: "/placeholder.jpg",
      icon: "palmtree",
    },
    {
      id: "gmelina",
      name: "Gmelina Tree",
      scientific_name: "Gmelina arborea",
      description:
        "Fast-growing hardwood tree widely used for timber and reforestation.",
      image_url: "/placeholder.jpg",
      icon: "pine",
    },
    {
      id: "betel-palm",
      name: "Betel Palm",
      scientific_name: "Areca catechu",
      description:
        "Palm tree whose seeds (areca nuts) are commonly chewed with betel leaves.",
      image_url: "/placeholder.jpg",
      icon: "palmtree",
    },
    {
      id: "areca-palm",
      name: "Areca/Butterfly Palm",
      scientific_name: "Dypsis lutescens",
      description:
        "Elegant clustering palm often used indoors and outdoors for ornamental purposes.",
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Organic background shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 organic-blob float-animation" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-accent/15 organic-blob-2 pulse-eco" />
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-secondary/20 organic-blob" />
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Leaf className="w-4 h-4 mr-2" />
              University of Northern Philippines
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="text-primary">CBAA</span> Eco Tag
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Welcome to the University of Northern Philippines eco-friendly tree tracking system. Each tree on our
              campus has been tagged with a unique QR code to help you learn about its species, environmental impact,
              and contribution to our ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Tree Selection Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
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
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-lg">
                        <img
                          src={(tree as any).image_url || (tree as any).image || "/placeholder.svg"}
                          alt={tree.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {tree.name}
                            </h3>
                            <p className="text-sm text-muted-foreground italic">{(tree as any).scientific_name || (tree as any).scientificName}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{tree.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
