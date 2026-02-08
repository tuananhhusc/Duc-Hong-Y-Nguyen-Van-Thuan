"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { timelineEvents, categoryLabels, type TimelineEvent } from "@/lib/data/timeline"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BiographyTimeline() {
    const [filter, setFilter] = React.useState<TimelineEvent['category'] | 'all'>('all')

    const filteredEvents = React.useMemo(() => {
        if (filter === 'all') return timelineEvents
        return timelineEvents.filter(event => event.category === filter)
    }, [filter])

    const categories = ['all', ...Object.keys(categoryLabels)] as const

    return (
        <div className="space-y-8">
            {/* Filter Controls */}
            <div className="flex flex-wrap gap-2 justify-center pb-8 border-b border-border-gray/50">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilter(cat as typeof filter)}
                        className="capitalize"
                    >
                        {cat === 'all' ? 'Tất cả' : categoryLabels[cat as keyof typeof categoryLabels]}
                    </Button>
                ))}
            </div>

            {/* Timeline */}
            <div className="relative space-y-8 pl-8 md:pl-0">
                {/* Vertical Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-gray -translate-x-1/2" />

                {/* Vertical Line for Mobile */}
                <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-border-gray" />

                <AnimatePresence mode="popLayout">
                    {filteredEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            layout
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background bg-catholic-gold shadow transform -translate-x-1/2 z-10" />

                            {/* Content Card */}
                            <div className="w-full md:w-[45%] pl-12 md:pl-0">
                                <Card className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="outline" className="text-xs font-mono">
                                                {event.year}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider">
                                                {categoryLabels[event.category]}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold mb-2 font-serif text-foreground">
                                            {event.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            {event.description}
                                        </p>

                                        <div className="pt-3 border-t border-border-gray/50">
                                            <p className="text-sm italic text-catholic-gold">
                                                "{event.significance}"
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block w-[45%]" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}
