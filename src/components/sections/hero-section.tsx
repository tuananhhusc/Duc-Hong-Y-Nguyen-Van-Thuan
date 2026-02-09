"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-catholic-gold/10 via-background to-background" />

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif text-catholic-gold">
                            ĐỨC HỒNG Y<br />NGUYỄN VĂN THUẬN
                        </h1>
                        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl font-serif italic">
                            "Chứng nhân của Hy vọng"
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative"
                    >
                        <blockquote className="border-l-4 border-catholic-gold pl-6 py-2 text-xl md:text-2xl font-medium italic text-foreground/90 max-w-3xl">
                            "Con phải phân biệt giữa Thiên Chúa và các công việc của Thiên Chúa."
                        </blockquote>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link href="/tieu-su">
                            <Button size="lg" className="gap-2">
                                Tìm hiểu cuộc đời
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/duong-hy-vong">
                            <Button size="lg" variant="outline" className="gap-2">
                                <BookOpen className="h-4 w-4" />
                                Đọc Đường Hy Vọng
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
