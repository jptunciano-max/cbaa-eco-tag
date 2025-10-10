import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Droplets, Sun, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { notFound } from "next/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

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

  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : rawVideoUrl.replace("/embed/", "/watch?v=")
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
    calendar: Calendar,
    droplets: Droplets,
    sun: Sun,
  }

  const imageSrc = tree?.image_url || "/placeholder.jpg"
  const sciName = tree?.scientific_name || ""

  // Read location from DB details
  const locationFromDetails = (details as any[])?.find((d: any) => (d?.title || "").toLowerCase() === "location")
    ?.text as string | undefined
  const locationText =
    locationFromDetails && !/coming\s+soon/i.test(locationFromDetails) ? locationFromDetails : undefined

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

      {/* Video Section */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-28 lg:pb-28 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <Link href="/">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance leading-tight tracking-tight">
                  Watch This Tree's <span className="text-primary">Story</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  Learn about the life cycle, ecological importance, and cultural value of {tree.name.toLowerCase()}s.
                </p>
                <div className="pt-4 space-y-4 hidden lg:block">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-muted-foreground">Immersive video experience</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-muted-foreground">Educational insights</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-muted-foreground">Ecological context</span>
                  </div>
                </div>
              </div>

              {/* Right: Video Card */}
              <div className="flex justify-center lg:justify-end">
                <Card className="overflow-hidden max-w-md w-full shadow-lg">
                  <div className="relative" style={{ aspectRatio: "9/16" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={videoUrl}
                      title={`${tree.name} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="px-4 py-3 text-center text-sm text-muted-foreground bg-muted/30">
                    Having trouble on mobile?{" "}
                    <a
                      href={watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground transition-colors font-medium"
                    >
                      Open on Google Drive
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 z-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 organic-blob float-animation" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-accent/15 organic-blob-2 pulse-eco" />
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-secondary/20 organic-blob" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10 sm:space-y-12">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
                  {heroTitle.includes(tree.name) ? heroTitle.replace(tree.name, "") : heroTitle}{" "}
                  <span className="text-primary block sm:inline mt-2 sm:mt-0">{tree.name}</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                  {heroIntro}
                </p>
              </div>

              {/* Plant Stats */}
              <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-6">
                {stats.slice(0, 3).map((stat: any, idx: number) => (
                  <div key={idx} className="text-center space-y-2">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Plant Image */}
            <div className="flex justify-center lg:justify-end">
              <Card className="p-6 sm:p-8 lg:p-10 bg-card/50 backdrop-blur-sm border-2 shadow-xl max-w-md w-full">
                <CardContent className="space-y-6 sm:space-y-8">
                  <div className="text-center space-y-5 sm:space-y-6">
                    <div className="relative w-full h-72 sm:h-80 lg:h-96 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={tree.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="object-cover rounded-xl"
                        priority
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">{sciName}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground font-medium">{tree.name}</p>
                      {locationText && (
                        <p className="text-sm sm:text-base text-muted-foreground pt-2 border-t border-border/50">{`Location: ${locationText}`}</p>
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
      <section className="py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-5 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance tracking-tight">
              About This <span className="text-primary">Tree</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Discover the fascinating characteristics and ecological benefits of this remarkable tree.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {details.map((d: any, idx: number) => {
              const Icon = iconMap[d.icon] || [MapPin, Calendar, Droplets, Sun][idx] || MapPin
              return (
                <Card
                  key={`${d.title}-${idx}`}
                  className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="space-y-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{d.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{d.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden z-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary-foreground/10 organic-blob-2" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-foreground/10 organic-blob" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance tracking-tight">{impact.title}</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 text-pretty leading-relaxed">
              {impact.blurb}
            </p>
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pt-6 sm:pt-8">
              {(impact.items || []).slice(0, 3).map((it: any, i: number) => (
                <div key={`${it.label}-${i}`} className="space-y-3 sm:space-y-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{it.value}</div>
                  <div className="text-base sm:text-lg text-primary-foreground/80 font-medium">{it.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  )
}
