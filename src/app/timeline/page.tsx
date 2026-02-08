import { BiographyTimeline } from "@/components/sections/biography-timeline"
import { Badge } from "@/components/ui/badge"

export default function TimelinePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
            <section className="bg-catholic-gold/10 py-16 md:py-24 border-b border-border-gray">
                <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
                    <Badge variant="outline" className="text-catholic-gold border-catholic-gold uppercase tracking-widest mb-4">
                        Mốc Thời Gian
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        Hành Trình Chứng Nhân
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        "Tôi đã đi một quãng đường dài... Đau khổ đã luyện lọc tôi."
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="max-w-5xl mx-auto">
                    <BiographyTimeline />
                </div>
            </div>
        </div>
    )
}
