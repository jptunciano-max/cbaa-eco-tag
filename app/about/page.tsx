import { Leaf, Users, Target, Heart, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 organic-blob float-animation" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-accent/15 organic-blob-2 pulse-eco" />
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <Link href="/">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Leaf className="w-4 h-4 mr-2" />
              About Our Project
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              About <span className="text-primary">CBAA EcoTag</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Bridging technology, education, and sustainability at the University of Northern Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="space-y-4 p-6 lg:p-8 bg-muted/30 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To create a campus where innovation and nature thrive together, fostering a culture of sustainability
                and environmental awareness that extends beyond the university walls.
              </p>
            </div>

            <div className="space-y-4 p-6 lg:p-8 bg-muted/30 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To harness digital technology in promoting environmental education, bridging the gap between knowledge
                and action, and cultivating a community that values and protects the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CBAA EcoTag */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">CBAA ECOTAG</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The EcoTag Project is an environmental awareness initiative by the University of Northern Philippines
              (UNP) that blends technology, education, and sustainability. Rooted in the belief that nature and progress
              should grow together, EcoTag turns the university's trees into living learning touchpoints through the use
              of QR-coded digital tags. Each tag connects to detailed information about the tree's species, lifespan,
              and ecological importance, allowing students, faculty, and visitors to learn directly from the natural
              environment that surrounds them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Our Purpose</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The project was created to make the invisible value of trees visible—to remind everyone that
              sustainability extends beyond buildings and infrastructure. By transforming ordinary trees into
              interactive educational tools, EcoTag aims to:
            </p>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 text-xl">•</span>
                <span>Promote environmental literacy and awareness among the UNP community.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 text-xl">•</span>
                <span>Encourage active stewardship of campus greenery.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 text-xl">•</span>
                <span>
                  Support the university's commitment to the United Nations Sustainable Development Goals
                  (SDGs)—specifically SDG 4 (Quality Education), SDG 11 (Sustainable Cities and Communities), SDG 13
                  (Climate Action), and SDG 15 (Life on Land).
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Through this project, UNP showcases how technology and conservation can coexist, inspiring others to take
              part in preserving the living heritage that defines our campus.
            </p>
          </div>
        </div>
      </section>

      {/* Our Participants */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Participants</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The EcoTag Project is a collaborative effort led by the Project Management Team composed of UNP students,
              faculty members, and environmental advocates.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3 p-6 bg-background rounded-xl border border-border">
                <h3 className="font-semibold text-base">Supervising Faculty Member</h3>
                <p className="text-muted-foreground">Mr. John Paul Robert T. Marzan</p>
              </div>

              <div className="space-y-3 p-6 bg-background rounded-xl border border-border">
                <h3 className="font-semibold text-base">Project Manager & Team Members</h3>
                <ul className="text-muted-foreground space-y-1.5">
                  <li>Jacelle P. Bangui</li>
                  <li>Reah Desiree M. Nalia</li>
                  <li>Alnea Nicole Riberal-Tiongson</li>
                  <li>Gerlyn Mae Ponce</li>
                  <li>Kristine P. Pilien</li>
                  <li>Christine Mae Farala</li>
                  <li>Charlie Trinidad</li>
                  <li>Henryson Ivan Tabulinar</li>
                </ul>
              </div>

              <div className="space-y-3 p-6 bg-background rounded-xl border border-border">
                <h3 className="font-semibold text-base">IT Experts & Web Developers</h3>
                <p className="text-muted-foreground">Jericko James Q. Tano</p>
              </div>

              <div className="space-y-3 p-6 bg-background rounded-xl border border-border">
                <h3 className="font-semibold text-base">Tree Surveyors & Environmental Volunteers</h3>
                <ul className="text-muted-foreground space-y-1.5">
                  <li>Jacelle P. Bangui</li>
                  <li>Charlie Trinidad</li>
                </ul>
              </div>

              <div className="space-y-3 p-6 bg-background rounded-xl border border-border">
                <h3 className="font-semibold text-base">Videographers & Editors</h3>
                <ul className="text-muted-foreground space-y-1.5">
                  <li>Kristine P. Pilien</li>
                  <li>Reah Desiree Nalia</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg italic">
              Together, these participants unite to ensure that every tagged tree tells a story of growth, heritage, and
              hope for a greener tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
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
      </section>
    </div>
  )
}
