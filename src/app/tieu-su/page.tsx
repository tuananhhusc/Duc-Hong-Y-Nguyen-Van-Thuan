import { ReadingProgress } from "@/components/ui/reading-progress"
import { APAReferences } from "@/components/sections/apa-references"
import { BiographyTimeline } from "@/components/sections/biography-timeline"
import { biographyData } from "@/lib/data/biography"
import { Badge } from "@/components/ui/badge"

export default function BiographyPage() {
    const chapters = Object.values(biographyData)

    return (
        <div className="min-h-screen bg-background pb-20">
            <ReadingProgress />

            {/* Hero Header */}
            <section className="bg-catholic-gold/10 py-16 md:py-24 border-b border-border">
                <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
                    <Badge variant="outline" className="text-catholic-gold border-catholic-gold uppercase tracking-widest mb-4">
                        Tiểu Sử
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        Cuộc Đời & Hành Trình Đức Tin
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        "Vui mừng và Hy vọng – Gaudium et Spes"
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Sidebar Navigation (Desktop) - LEFT SIDE */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-5 rounded-xl border border-border bg-card shadow-sm">
                                <h4 className="font-bold text-xs uppercase tracking-widest text-catholic-gold mb-4 pb-3 border-b border-border">
                                    Mục lục
                                </h4>
                                <nav className="space-y-1">
                                    {chapters.map((chapter) => (
                                        <a
                                            key={chapter.id}
                                            href={`#${chapter.id}`}
                                            className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold/50 flex-shrink-0"></span>
                                            <span className="line-clamp-2">{chapter.title}</span>
                                        </a>
                                    ))}
                                    <a
                                        href="#timeline-embedded"
                                        className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold/50 flex-shrink-0"></span>
                                        <span>Mốc Thời Gian</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content - RIGHT SIDE */}
                    <main className="lg:col-span-9 space-y-16">
                        {chapters.map((chapter) => (
                            <article key={chapter.id} id={chapter.id} className="scroll-mt-24 space-y-8">
                                <header className="border-l-4 border-catholic-gold pl-6 py-2">
                                    <span className="text-xs font-bold text-catholic-gold uppercase tracking-widest block mb-2">
                                        {chapter.period}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                                        {chapter.title}
                                    </h2>
                                </header>

                                <p className="text-lg text-muted-foreground font-serif italic border-b border-border pb-6">
                                    {chapter.description}
                                </p>

                                <div className="space-y-10">
                                    {chapter.sections.map((section, idx) => (
                                        <section key={idx} className="space-y-4">
                                            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                                                {section.subtitle}
                                            </h3>

                                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed font-serif">
                                                {section.content.map((paragraph, pIdx) => (
                                                    <p key={pIdx} className="mb-4 text-justify">{paragraph}</p>
                                                ))}
                                            </div>

                                            {section.quote && (
                                                <blockquote className="my-6 px-6 py-5 bg-muted/50 border-l-4 border-catholic-gold rounded-r-lg">
                                                    <p className="text-lg md:text-xl font-serif italic text-foreground">
                                                        "{section.quote}"
                                                    </p>
                                                </blockquote>
                                            )}
                                        </section>
                                    ))}
                                </div>
                            </article>
                        ))}

                        {/* Timeline Section embedded */}
                        <section id="timeline-embedded" className="pt-12 border-t border-border">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">
                                Mốc Thời Gian Quan Trọng
                            </h2>
                            <BiographyTimeline />
                        </section>
                    </main>
                </div>
            </div>
            <APAReferences pageId="tieu-su" />
        </div>
    )
}
