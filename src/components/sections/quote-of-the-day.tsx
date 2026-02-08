"use client"

import * as React from "react"
import { Quote } from "lucide-react"

import { duongHyVongCorpus, type CorpusEntry } from "@/lib/data/corpus"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QuoteOfTheDay() {
    const [quote, setQuote] = React.useState<CorpusEntry | null>(null)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const today = new Date().toDateString()
        const stored = localStorage.getItem("quote-of-day")

        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                if (parsed.date === today) {
                    setQuote(parsed.quote)
                    setIsLoading(false)
                    return
                }
            } catch (e) {
                console.error("Failed to parse stored quote", e)
            }
        }

        // Select a new random quote if not stored or date changed
        // Since corpus might be small initially, we just pick random
        // In production with full corpus, this works well
        const randomQuote = duongHyVongCorpus[
            Math.floor(Math.random() * duongHyVongCorpus.length)
        ]

        setQuote(randomQuote)
        localStorage.setItem("quote-of-day", JSON.stringify({
            date: today,
            quote: randomQuote
        }))
        setIsLoading(false)
    }, [])

    if (isLoading || !quote) {
        // Skeleton loader or null
        return null
    }

    return (
        <Card className="bg-parchment-bg dark:bg-card border-catholic-gold/20">
            <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <Quote className="h-8 w-8 text-catholic-gold/50 rotate-180" />

                <blockquote className="text-xl md:text-2xl font-medium font-serif italic text-foreground/90">
                    "{quote.vanBan}"
                </blockquote>

                <div className="text-sm text-muted-foreground mt-2">
                    <cite className="not-italic font-semibold block text-foreground">
                        Đường Hy Vọng, Câu {quote.soCau}
                    </cite>
                    <span className="block text-xs mt-1">({quote.tuaChuong})</span>
                </div>

                <div className="flex gap-2 mt-4">
                    <Button variant="ghost" size="sm" onClick={() => {
                        navigator.clipboard.writeText(`"${quote.vanBan}" - Đường Hy Vọng, Câu ${quote.soCau}`);
                    }}>
                        Sao chép
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
