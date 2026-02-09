"use client"

import * as React from "react"
import { Quote, RefreshCw } from "lucide-react"

import { duongHyVongCorpus, type CorpusEntry } from "@/lib/data/corpus"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Helper to get a valid random quote (non-empty content)
function getRandomQuote(): CorpusEntry | null {
    if (!duongHyVongCorpus || duongHyVongCorpus.length === 0) return null;

    // Filter quotes with valid content
    const validQuotes = duongHyVongCorpus.filter(q => q.noi_dung && q.noi_dung.trim().length > 0);
    if (validQuotes.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * validQuotes.length);
    return validQuotes[randomIndex];
}

// Helper to validate a quote has required fields
function isValidQuote(quote: unknown): quote is CorpusEntry {
    if (!quote || typeof quote !== 'object') return false;
    const q = quote as Record<string, unknown>;
    return typeof q.noi_dung === 'string' && q.noi_dung.trim().length > 0 &&
        typeof q.stt === 'number' &&
        typeof q.chuong === 'number';
}

export function QuoteOfTheDay() {
    const [quote, setQuote] = React.useState<CorpusEntry | null>(null)
    const [isLoading, setIsLoading] = React.useState(true)

    const loadQuote = React.useCallback((forceNew: boolean = false) => {
        setIsLoading(true);

        const today = new Date().toDateString()
        const storageKey = "quote-of-day-v2" // New key to avoid old invalid cache

        if (!forceNew) {
            try {
                const stored = localStorage.getItem(storageKey)
                if (stored) {
                    const parsed = JSON.parse(stored)
                    if (parsed.date === today && isValidQuote(parsed.quote)) {
                        setQuote(parsed.quote)
                        setIsLoading(false)
                        return
                    }
                }
            } catch (e) {
                console.error("Failed to parse stored quote", e)
            }
        }

        // Get a new random quote
        const randomQuote = getRandomQuote();

        if (randomQuote) {
            setQuote(randomQuote)
            localStorage.setItem(storageKey, JSON.stringify({
                date: today,
                quote: randomQuote
            }))
        }
        setIsLoading(false)
    }, [])

    React.useEffect(() => {
        loadQuote()
    }, [loadQuote])

    if (isLoading) {
        return (
            <Card className="bg-parchment-bg dark:bg-card border-catholic-gold/20 animate-pulse">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div className="h-8 w-8 bg-muted rounded" />
                    <div className="h-6 w-3/4 bg-muted rounded" />
                    <div className="h-4 w-1/2 bg-muted rounded" />
                </CardContent>
            </Card>
        )
    }

    if (!quote) {
        return (
            <Card className="bg-parchment-bg dark:bg-card border-catholic-gold/20">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <p className="text-muted-foreground">Không thể tải được trích dẫn.</p>
                    <Button variant="ghost" size="sm" onClick={() => loadQuote(true)}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Thử lại
                    </Button>
                </CardContent>
            </Card>
        )
    }

    // Truncate very long quotes for display (show first 300 chars)
    const displayContent = quote.noi_dung.length > 300
        ? quote.noi_dung.substring(0, 300).trim() + "..."
        : quote.noi_dung;

    return (
        <Card className="bg-parchment-bg dark:bg-card border-catholic-gold/20">
            <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <Quote className="h-8 w-8 text-catholic-gold/50 rotate-180" />

                <blockquote className="text-xl md:text-2xl font-medium font-serif italic text-foreground/90 max-w-2xl">
                    "{displayContent}"
                </blockquote>

                <div className="text-sm text-muted-foreground mt-2">
                    <cite className="not-italic font-semibold block text-foreground">
                        Đường Hy Vọng, Câu {quote.stt}
                    </cite>
                    <span className="block text-xs mt-1">(Chương {quote.chuong})</span>
                </div>

                <div className="flex gap-2 mt-4">
                    <Button variant="ghost" size="sm" onClick={() => {
                        navigator.clipboard.writeText(`"${quote.noi_dung}" - Đường Hy Vọng, Câu ${quote.stt}`);
                    }}>
                        Sao chép
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => loadQuote(true)}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Câu khác
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
