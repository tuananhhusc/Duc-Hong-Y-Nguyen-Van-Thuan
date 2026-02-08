import Link from "next/link"
import { BookOpen, Clock, Lightbulb } from "lucide-react"

import { HeroSection } from "@/components/sections/hero-section"
import { QuoteOfTheDay } from "@/components/sections/quote-of-the-day"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      {/* Main Content Space */}
      <div className="h-8" />

      {/* Quote of the Day Section */}
      <section className="py-16 md:py-24 container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-serif text-foreground">
            Lời Chúa & Suy Niệm Mỗi Ngày
          </h2>
          <p className="text-muted-foreground">
            Hãy bắt đầu ngày mới với một tư tưởng hy vọng từ Đức Hồng y.
          </p>
          <QuoteOfTheDay />
          <Link href="/duong-hy-vong">
            <Button variant="outline" className="mt-8">
              Xem thêm 1000 câu khác
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
