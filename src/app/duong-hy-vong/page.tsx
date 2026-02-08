import { ReadingProgress } from "@/components/ui/reading-progress"
import { APAReferences } from "@/components/sections/apa-references"
import { Badge } from "@/components/ui/badge"
import { bookStructure, duongHyVongCorpus, bookMetadata } from "@/lib/data/corpus"
import { BookOpen, Quote, Search } from "lucide-react"

export default function CorpusPage() {
    // Group meditations by chapter
    const meditationsByChapter = bookStructure.map(chapter => ({
        ...chapter,
        meditations: duongHyVongCorpus.filter(m => m.chuong === chapter.chapter)
    }))

    return (
        <div className="min-h-screen bg-background pb-20">
            <ReadingProgress />

            {/* Hero Header */}
            <section className="bg-catholic-gold/10 py-16 md:py-24 border-b border-border">
                <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
                    <Badge variant="outline" className="text-catholic-gold border-catholic-gold uppercase tracking-widest mb-4">
                        Đường Hy Vọng
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        {bookMetadata.totalMeditations} Câu Suy Niệm
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        "Chấm mỗi chấm cho đúng, đường sẽ đẹp. Sống mỗi phút cho tốt, đời sẽ thánh."
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Sidebar Navigation (Desktop) - LEFT SIDE */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-5 rounded-xl border border-border bg-card shadow-sm max-h-[70vh] overflow-y-auto">
                                <h4 className="font-bold text-xs uppercase tracking-widest text-catholic-gold mb-4 pb-3 border-b border-border sticky top-0 bg-card">
                                    Mục lục ({bookMetadata.totalChapters} chương)
                                </h4>
                                <nav className="space-y-1">
                                    <a
                                        href="#gioi-thieu"
                                        className="flex items-center gap-2 text-sm py-2 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                    >
                                        <BookOpen className="w-3.5 h-3.5 flex-shrink-0 text-catholic-gold/70" />
                                        <span>Giới thiệu</span>
                                    </a>
                                    {bookStructure.map((chapter) => (
                                        <a
                                            key={chapter.chapter}
                                            href={`#chuong-${chapter.chapter}`}
                                            className="flex items-start gap-2 text-sm py-2 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                        >
                                            <span className="text-xs text-catholic-gold/60 font-mono mt-0.5 w-5 flex-shrink-0">{chapter.chapter}.</span>
                                            <span className="line-clamp-1">{chapter.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content - RIGHT SIDE */}
                    <main className="lg:col-span-9 space-y-16">
                        {/* Introduction Section */}
                        <article id="gioi-thieu" className="scroll-mt-24 space-y-8">
                            <header className="border-l-4 border-catholic-gold pl-6 py-2">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                                    Giới Thiệu Tác Phẩm
                                </h2>
                            </header>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed font-serif">
                                <p className="text-justify">
                                    {bookMetadata.description}
                                </p>
                                <p className="text-justify">
                                    {bookMetadata.purpose}
                                </p>
                            </div>

                            <div className="my-6 px-6 py-5 bg-muted/50 border-l-4 border-catholic-gold rounded-r-lg">
                                <h4 className="font-semibold text-sm mb-3 text-catholic-gold uppercase tracking-wide">
                                    Ba bí quyết của Đường Hy Vọng
                                </h4>
                                <ul className="space-y-2">
                                    {bookMetadata.keyThemes.map((theme, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                                            <span className="text-catholic-gold font-bold">{idx + 1}.</span>
                                            <span className="font-serif">{theme}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-4 bg-card border border-border rounded-lg text-center">
                                    <div className="text-2xl font-bold text-catholic-gold">{bookMetadata.totalMeditations}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Câu suy niệm</div>
                                </div>
                                <div className="p-4 bg-card border border-border rounded-lg text-center">
                                    <div className="text-2xl font-bold text-catholic-gold">{bookMetadata.totalChapters}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Chương</div>
                                </div>
                                <div className="p-4 bg-card border border-border rounded-lg text-center">
                                    <div className="text-2xl font-bold text-catholic-gold">{bookMetadata.originalYear}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Viết trong tù</div>
                                </div>
                                <div className="p-4 bg-card border border-border rounded-lg text-center">
                                    <div className="text-2xl font-bold text-catholic-gold">{bookMetadata.publishedYear}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Xuất bản</div>
                                </div>
                            </div>
                        </article>

                        {/* Chapters with Meditations */}
                        {meditationsByChapter.filter(ch => ch.meditations.length > 0).map((chapter) => (
                            <article key={chapter.chapter} id={`chuong-${chapter.chapter}`} className="scroll-mt-24 space-y-8">
                                <header className="border-l-4 border-catholic-gold pl-6 py-2">
                                    <span className="text-xs font-bold text-catholic-gold uppercase tracking-widest block mb-2">
                                        Chương {chapter.chapter} • Câu {chapter.range}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight">
                                        {chapter.title}
                                    </h2>
                                </header>

                                {chapter.description && (
                                    <p className="text-lg text-muted-foreground font-serif italic border-b border-border pb-6">
                                        {chapter.description}
                                    </p>
                                )}

                                <div className="space-y-6">
                                    {chapter.meditations.map((meditation) => (
                                        <div
                                            key={meditation.id}
                                            className="group p-6 bg-card border border-border rounded-lg hover:border-catholic-gold/50 transition-colors"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-catholic-gold/10 flex items-center justify-center">
                                                    <span className="text-sm font-bold text-catholic-gold">
                                                        {meditation.soCau}
                                                    </span>
                                                </div>
                                                <div className="flex-1 space-y-3">
                                                    <blockquote className="text-lg font-serif leading-relaxed text-foreground">
                                                        "{meditation.vanBan}"
                                                    </blockquote>

                                                    <div className="flex flex-wrap gap-2">
                                                        {meditation.chuDeLinhDao.map((theme, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-0.5 bg-muted text-xs text-muted-foreground rounded-full"
                                                            >
                                                                {theme}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {meditation.thamChieuKinhThanh && (
                                                        <p className="text-sm text-catholic-gold/80 italic">
                                                            📖 {meditation.thamChieuKinhThanh}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}

                        {/* All Chapters Overview */}
                        <section id="tong-quan" className="pt-12 border-t border-border scroll-mt-24">
                            <header className="border-l-4 border-catholic-gold pl-6 py-2 mb-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                                    Tổng Quan 38 Chương
                                </h2>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {bookStructure.map((chapter) => (
                                    <a
                                        key={chapter.chapter}
                                        href={`#chuong-${chapter.chapter}`}
                                        className="p-4 bg-card border border-border rounded-lg hover:border-catholic-gold/50 hover:bg-muted/30 transition-all group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-lg font-bold text-catholic-gold/60 group-hover:text-catholic-gold transition-colors">
                                                {chapter.chapter}.
                                            </span>
                                            <div>
                                                <h4 className="font-serif font-semibold text-foreground group-hover:text-catholic-gold transition-colors">
                                                    {chapter.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Câu {chapter.range}
                                                </p>
                                                {chapter.description && (
                                                    <p className="text-sm text-muted-foreground/70 mt-1 italic">
                                                        {chapter.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <APAReferences pageId="duong-hy-vong" />
        </div>
    )
}
