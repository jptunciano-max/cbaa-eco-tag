import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Droplets, Sun } from "lucide-react"
import Image from "next/image"
import { supabase } from "@/lib/supabaseClient"
import { notFound } from "next/navigation"

export default async function TreeDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  // Fetch base tree info
  const { data: tree } = await supabase
    .from("trees")
    .select("name, scientific_name, description, image_url")
    .eq("id", id)
    .single()

  if (!tree) {
    notFound()
  }

  // Fetch detailed content
  const { data: content } = await supabase
    .from("tree_content")
    .select("video, hero, stats, details, impact")
    .eq("id", id)
    .single()

  const rawVideoUrl = (content as any)?.video?.url || "https://www.youtube.com/embed/ysz5S6PUM-U"
  
  // Extract video ID and rebuild URL with mobile-friendly params
  const getVideoId = (url: string) => {
    const match = url.match(/(?:embed\/|watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
    return match ? match[1] : null
  }
  
  const videoId = getVideoId(rawVideoUrl)
  const videoUrl = videoId 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`
    : rawVideoUrl
  
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : rawVideoUrl.replace('/embed/', '/watch?v=')
  const heroTitle = (content as any)?.hero?.title || `Meet the ${tree.name}`
  const heroIntro = (content as any)?.hero?.intro || tree.description || ""

  const stats = (content as any)?.stats || [
    { label: "Height", value: "N/A" },
    { label: "Lifespan", value: "N/A" },
    { label: "CO₂/Year", value: "N/A" },
  ]

  const details = (content as any)?.details || [
    { title: "Location", text: "Information coming soon.", icon: "map-pin" },
    { title: "Lifespan", text: "Information coming soon.", icon: "calendar" },
    { title: "Water Needs", text: "Information coming soon.", icon: "droplets" },
    { title: "Sunlight", text: "Information coming soon.", icon: "sun" },
  ]

  const impact = (content as any)?.impact || {
    title: "Environmental Impact",
    blurb: `The ${tree.name} contributes to the environment through carbon absorption, habitat provision, and ecological support.`,
    items: [
      { label: "Carbon Storage", value: "High" },
      { label: "Biodiversity", value: "Supports Wildlife" },
      { label: "Ecosystem", value: "Key Species" },
    ],
  }

  const iconMap: Record<string, React.ComponentType<any>> = {
    "map-pin": MapPin,
    "calendar": Calendar,
    "droplets": Droplets,
    "sun": Sun,
  }

  const imageSrc = tree?.image_url || "/placeholder.jpg"
  const sciName = tree?.scientific_name || ""

  // Read location from DB details
  const locationFromDetails = (details as any[])?.find((d: any) => (d?.title || '').toLowerCase() === 'location')?.text as string | undefined
  const locationText = locationFromDetails && !/coming\s+soon/i.test(locationFromDetails) ? locationFromDetails : undefined

  return (
    <div className="min-h-screen bg-background">
      {/* Video Section */}
      <section className="py-10 sm:py-14 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
                Watch This Tree's <span className="text-primary">Story</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty">
                Learn about the life cycle, ecological importance, and cultural value of {tree.name.toLowerCase()}s.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={videoUrl}
                  title={`${tree.name} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-4 py-3 text-center text-sm text-muted-foreground">
                Having trouble on mobile?{' '}
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Open on YouTube
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 organic-blob float-animation" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-accent/15 organic-blob-2 pulse-eco" />
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-secondary/20 organic-blob" />
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  {heroTitle.includes(tree.name) ? heroTitle.replace(tree.name, "") : heroTitle}{' '}
                  <span className="text-primary">{tree.name}</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
                  {heroIntro}
                </p>
              </div>

              {/* Plant Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                {stats.slice(0, 3).map((stat: any, idx: number) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Plant Image */}
            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="relative w-full h-64 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={tree.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 600px, 800px"
                        className="object-cover rounded-xl"
                        priority
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-semibold">{sciName}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{tree.name}</p>
                      {locationText && (
                        <p className="text-sm sm:text-base text-muted-foreground">{`Location: ${locationText}`}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Details Section */}
      <section className="py-10 sm:py-14 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
              About This <span className="text-primary">Tree</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the fascinating characteristics and ecological benefits of this remarkable tree.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {details.map((d: any, idx: number) => {
              const Icon = iconMap[d.icon] || [MapPin, Calendar, Droplets, Sun][idx] || MapPin
              return (
                <Card key={`${d.title}-${idx}`} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{d.title}</h3>
                    <p className="text-muted-foreground">{d.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-10 sm:py-14 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary-foreground/10 organic-blob-2" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-foreground/10 organic-blob" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">{impact.title}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 text-pretty">{impact.blurb}</p>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8">
              {(impact.items || []).slice(0, 3).map((it: any, i: number) => (
                <div key={`${it.label}-${i}`} className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold">{it.value}</div>
                  <div className="text-primary-foreground/80">{it.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



