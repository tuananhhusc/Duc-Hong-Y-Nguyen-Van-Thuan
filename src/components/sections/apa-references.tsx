import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen } from "lucide-react"
import { type APAReference, getReferencesForPage, pageReferences } from "@/lib/data/references"

interface APAReferencesProps {
    pageId: keyof typeof pageReferences
    className?: string
}

export function APAReferences({ pageId, className }: APAReferencesProps) {
    const references = getReferencesForPage(pageId)

    if (references.length === 0) return null

    return (
        <section className={`border-t border-border py-12 bg-muted/30 ${className || ''}`}>
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="h-5 w-5 text-catholic-gold" />
                    <Badge variant="outline" className="text-muted-foreground uppercase tracking-widest">
                        Tài liệu tham khảo
                    </Badge>
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Nguồn Tham Khảo
                </h3>
                <p className="text-sm text-muted-foreground mb-6 italic">
                    Trích dẫn theo chuẩn APA (American Psychological Association)
                </p>

                <ol className="space-y-4">
                    {references.map((ref, index) => (
                        <li key={ref.id} className="flex gap-3 text-foreground/90 text-sm leading-relaxed">
                            <span className="font-semibold text-catholic-gold flex-shrink-0">{index + 1}.</span>
                            <div>
                                <span className="font-semibold">{ref.author}</span>{" "}
                                ({ref.year}).{" "}
                                <span className="italic">{ref.title}</span>.{" "}
                                {ref.source}
                                {ref.pages && ` (${ref.pages})`}
                                .
                                {ref.url && (
                                    <a
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-catholic-gold hover:underline ml-2"
                                    >
                                        <ExternalLink className="h-3 w-3 flex-shrink-0" />
                                        <span className="text-xs">Truy cập</span>
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground italic">
                        Lưu ý: Các nguồn tham khảo được trích dẫn theo tiêu chuẩn APA 7th Edition.
                        Ngày truy cập cho các nguồn trực tuyến: {new Date().toLocaleDateString('vi-VN')}.
                    </p>
                </div>
            </div>
        </section>
    )
}
