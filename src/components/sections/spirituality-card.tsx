"use client"

import { motion } from "framer-motion"
import { type SpiritualityTheme } from "@/lib/data/spirituality"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SpiritualityCardProps {
    theme: SpiritualityTheme
    index: number
}

export function SpiritualityCard({ theme, index }: SpiritualityCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="h-full border-t-4 border-t-catholic-gold hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl text-catholic-gold mb-2">
                        {theme.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-muted-foreground italic">
                        "{theme.summary}"
                    </p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2 text-foreground/80 leading-relaxed">
                        {theme.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    {theme.keyPrinciples && (
                        <div className="mt-4 pt-4 border-t border-border-gray/50">
                            <h4 className="font-semibold text-sm mb-2 text-catholic-gold">Nguyên tắc cốt lõi:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70">
                                {theme.keyPrinciples.map((principle, idx) => (
                                    <li key={idx}>{principle}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    )
}
