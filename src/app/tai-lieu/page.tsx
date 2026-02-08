import Link from "next/link"
import { ExternalLink, Book, FileText, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ReferencesPage() {
    const references = [
        {
            id: "1",
            title: "François-Xavier Nguyen Van Thuan: Witness of Hope",
            author: "Focolare",
            year: "2025",
            type: "Online Article",
            url: "https://www.focolare.org/en/francois-xavier-nguyen-van-thuan-witness-of-hope/",
            icon: <Globe className="h-5 w-5" />
        },
        {
            id: "2",
            title: "Nguyễn Văn Thuận",
            author: "Wikipedia",
            year: "2024",
            type: "Encyclopedia",
            url: "https://en.wikipedia.org/wiki/Nguyen_Van_Thuan",
            icon: <Globe className="h-5 w-5" />
        },
        {
            id: "3",
            title: "First Vietnamese bishop moving toward sainthood",
            author: "Focolare",
            year: "2010",
            type: "Online Article",
            url: "https://www.focolare.org/en/first-vietnamese-bishop-moving-toward-sainthood/",
            icon: <Globe className="h-5 w-5" />
        },
        {
            id: "4",
            title: "NGUYÊN VAN THUÂN Card. François Xavier",
            author: "Vatican Press Office",
            year: "2001",
            type: "Official Biography",
            url: "https://press.vatican.va/content/salastampa/en/documentation/cardinali_biografie/cardinali_bio_nguyen-van-thuan_fx.html",
            icon: <FileText className="h-5 w-5" />
        },
        {
            id: "5",
            title: "Biography of the Cardinal Francois Xavier Nguyen Van Thuan",
            author: "Viet Catholic News",
            year: "2019",
            type: "News Article",
            url: "http://www.vietcatholicnews.net/News/Html/1787.htm",
            icon: <Globe className="h-5 w-5" />
        },
        {
            id: "8",
            title: "To participants of the closing session of the diocesan phase of the beatification cause",
            author: "Vatican (Pope Francis)",
            year: "2013",
            type: "Speech",
            url: "https://www.vatican.va/content/francesco/en/speeches/2013/july/documents/papa-francesco_20130706_processo-beatificazione-van-thuan.html",
            icon: <FileText className="h-5 w-5" />
        },
        {
            id: "9",
            title: "Duong Hy Vong duoi anh sang Loi Chua va Cong Dong",
            author: "Vietnamese Missionaries in Taiwan",
            year: "N/A",
            type: "Theological Study",
            url: "https://vntaiwan.catholic.org.tw/hyvong2/hyvong2.htm",
            icon: <Book className="h-5 w-5" />
        },
        {
            id: "12",
            title: "Đường Hy Vọng",
            author: "Giesu.net",
            year: "2026",
            type: "Book Source",
            url: "https://giesu.net/duong-hy-vong/",
            icon: <Book className="h-5 w-5" />
        }
    ]

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
            <section className="bg-muted/30 py-16 md:py-24 border-b border-border-gray">
                <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
                    <Badge variant="outline" className="text-foreground border-foreground uppercase tracking-widest mb-4">
                        Tài Liệu
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        Nguồn Tham Khảo
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        Các tài liệu, bài viết và nguồn thông tin được sử dụng để xây dựng nội dung website này.
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {references.map((ref) => (
                        <Card key={ref.id} className="hover:border-catholic-gold transition-colors">
                            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                                <CardTitle className="text-lg font-serif font-bold line-clamp-2 pr-4">
                                    {ref.title}
                                </CardTitle>
                                <div className="text-muted-foreground">
                                    {ref.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">{ref.author}</span>
                                    <span>•</span>
                                    <span>{ref.year}</span>
                                    <span>•</span>
                                    <Badge variant="secondary" className="text-xs font-normal">
                                        {ref.type}
                                    </Badge>
                                </div>

                                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                    <Link href={ref.url} target="_blank" rel="noopener noreferrer">
                                        Truy cập nguồn <ExternalLink className="h-3 w-3" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center text-muted-foreground text-sm max-w-2xl mx-auto">
                    <p>
                        * Các nguồn tài liệu được trích dẫn theo định dạng APA và được đánh số tương ứng trong các bài viết.
                    </p>
                </div>
            </div>
        </div>
    )
}
