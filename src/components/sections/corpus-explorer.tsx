"use client"

import * as React from "react"
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { duongHyVongCorpus, bookStructure } from "@/lib/data/corpus"
import { searchCorpus } from "@/lib/utils/search"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const ITEMS_PER_PAGE = 10

export function CorpusExplorer() {
    const [query, setQuery] = React.useState("")
    const [currentPage, setCurrentPage] = React.useState(1)
    const [selectedChapter, setSelectedChapter] = React.useState<number | "all">("all")

    // Filter corpus based on search query and selected chapter
    const filteredCorpus = React.useMemo(() => {
        let results = duongHyVongCorpus

        if (selectedChapter !== "all") {
            results = results.filter(item => item.chuong === selectedChapter)
        }

        if (query) {
            // If searching, we search within the filtered chapter results
            // Note: Fuse search returns items sorted by relevance
            // For simplicity here, we assume searchCorpus handles the search logic locally
            // Ideally searchCorpus should be efficient.
            // Since searchCorpus returns just the items, we re-apply it here
            // Wait, searchCorpus returns { item, score } usually but my utility returned .item
            // Let's check my utility. Yes, it returns .item
            // But searchCorpus expects 'corpus' as second arg.
            const searchResults = searchCorpus(query, results)
            // If no query, searchCorpus returns original corpus? 
            // My utility: if (!query) return corpus; 
            // So yes.
            results = searchResults as typeof duongHyVongCorpus
        }

        return results
    }, [query, selectedChapter])

    // Pagination logic
    const totalPages = Math.ceil(filteredCorpus.length / ITEMS_PER_PAGE)
    const paginatedItems = filteredCorpus.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    // Reset page when filter changes
    React.useEffect(() => {
        setCurrentPage(1)
    }, [query, selectedChapter])

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Tìm kiếm trong 1001 câu..."
                        className="pl-9"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                    <Button
                        variant={selectedChapter === "all" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedChapter("all")}
                    >
                        Tất cả
                    </Button>
                    {bookStructure.map(chapter => (
                        <Button
                            key={chapter.chapter}
                            variant={selectedChapter === chapter.chapter ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedChapter(chapter.chapter)}
                            className="whitespace-nowrap"
                        >
                            {chapter.chapter}. {chapter.title}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid gap-4">
                <AnimatePresence mode="popLayout">
                    {paginatedItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="hover:border-catholic-gold/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="outline" className="font-mono text-xs">
                                            #{item.soCau}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">
                                            Chương {item.chuong}: {item.tuaChuong}
                                        </span>
                                    </div>

                                    <p className="text-lg font-serif mb-4 leading-relaxed">
                                        {item.vanBan}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.chuDeLinhDao.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {paginatedItems.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                        Không tìm thấy kết quả nào.
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="flex items-center px-4 font-mono text-sm">
                        Trang {currentPage} / {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    )
}
