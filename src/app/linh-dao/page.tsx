import { ReadingProgress } from "@/components/ui/reading-progress"
import { APAReferences } from "@/components/sections/apa-references"
import { spiritualityData } from "@/lib/data/spirituality"
import { Badge } from "@/components/ui/badge"

export default function SpiritualityPage() {
    const themes = spiritualityData

    return (
        <div className="min-h-screen bg-background pb-20">
            <ReadingProgress />

            {/* Hero Header */}
            <section className="bg-catholic-gold/10 py-16 md:py-24 border-b border-border">
                <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
                    <Badge variant="outline" className="text-catholic-gold border-catholic-gold uppercase tracking-widest mb-4">
                        Linh Đạo
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        Chứng Nhân Hy Vọng
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        "Không phải chỉ là hy vọng vào một ngày mai tươi sáng hơn, mà là hy vọng vào chính Thiên Chúa."
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
                                    {themes.map((theme) => (
                                        <a
                                            key={theme.id}
                                            href={`#${theme.id}`}
                                            className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold/50 flex-shrink-0"></span>
                                            <span className="line-clamp-2">{theme.title}</span>
                                        </a>
                                    ))}
                                    <a
                                        href="#di-san"
                                        className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold/50 flex-shrink-0"></span>
                                        <span>Di Sản Tinh Thần</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content - RIGHT SIDE */}
                    <main className="lg:col-span-9 space-y-16">
                        {themes.map((theme) => (
                            <article key={theme.id} id={theme.id} className="scroll-mt-24 space-y-8">
                                <header className="border-l-4 border-catholic-gold pl-6 py-2">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                                        {theme.title}
                                    </h2>
                                </header>

                                <blockquote className="text-lg text-muted-foreground font-serif italic border-b border-border pb-6">
                                    "{theme.summary}"
                                </blockquote>

                                <div className="space-y-10">
                                    <section className="space-y-4">
                                        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed font-serif">
                                            {theme.content.map((paragraph, pIdx) => (
                                                <p key={pIdx} className="mb-4 text-justify">{paragraph}</p>
                                            ))}
                                        </div>

                                        {theme.keyPrinciples && theme.keyPrinciples.length > 0 && (
                                            <div className="my-6 px-6 py-5 bg-muted/50 border-l-4 border-catholic-gold rounded-r-lg">
                                                <h4 className="font-semibold text-sm mb-3 text-catholic-gold uppercase tracking-wide">
                                                    Nguyên tắc cốt lõi
                                                </h4>
                                                <ul className="space-y-2">
                                                    {theme.keyPrinciples.map((principle, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold mt-2 flex-shrink-0"></span>
                                                            <span className="font-serif">{principle}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </section>
                                </div>
                            </article>
                        ))}

                        {/* Di Sản Tinh Thần Section */}
                        <section id="di-san" className="pt-12 border-t border-border scroll-mt-24">
                            <header className="border-l-4 border-catholic-gold pl-6 py-2 mb-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                                    Di Sản Tinh Thần
                                </h2>
                            </header>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed font-serif">
                                <p className="text-justify">
                                    Linh đạo của Đức Hồng y Nguyễn Văn Thuận không phải là lý thuyết trừu tượng, mà là kinh nghiệm sống động được đúc kết từ đau thương và thử thách. Đó là lời mời gọi mỗi người chúng ta sống trọn vẹn giây phút hiện tại với tình yêu thương.
                                </p>
                                <p className="text-justify">
                                    Ngài đã để lại cho Giáo Hội và thế giới một di sản tinh thần vô giá: khả năng tìm thấy Thiên Chúa ngay trong những hoàn cảnh tăm tối nhất, biến đau khổ thành cơ hội yêu thương, và sống hy vọng như một lựa chọn có ý thức mỗi ngày.
                                </p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <APAReferences pageId="linh-dao" />
        </div>
    )
}
