import { ReadingProgress } from "@/components/ui/reading-progress"
import { APAReferences } from "@/components/sections/apa-references"
import { Badge } from "@/components/ui/badge"

export default function ApplicationPage() {
    const applications = [
        {
            id: "gia-dinh",
            title: "Trong Gia Đình",
            summary: "Biến gia đình thành nơi lan tỏa tình yêu và hy vọng.",
            content: [
                "Gia đình là nơi đầu tiên và quan trọng nhất để thực hành linh đạo hy vọng của Đức Hồng y Nguyễn Văn Thuận. Ngài tin rằng thánh hóa bản thân bắt đầu từ những mối quan hệ gần gũi nhất.",
                "Trong mỗi ngày, chúng ta được mời gọi sống trọn vẹn với những người thân yêu, không để công việc hay lo toan cuộc sống làm mờ đi sự hiện diện của chúng ta bên gia đình."
            ],
            keyPrinciples: [
                "Sống giây phút hiện tại với vợ/chồng và con cái.",
                "Tha thứ và làm hòa trước khi mặt trời lặn.",
                "Cầu nguyện chung mỗi ngày."
            ],
            reflection: "Tôi có đang quá bận rộn với 'công việc của Chúa' mà quên mất những người thân yêu Chúa gửi đến cho tôi không?"
        },
        {
            id: "cong-viec",
            title: "Tại Nơi Làm Việc",
            summary: "Nên thánh giữa đời thường qua công việc bổn phận.",
            content: [
                "Đức Hồng y dạy rằng công việc không chỉ là phương tiện kiếm sống, mà còn là cơ hội để thánh hóa bản thân và phục vụ người khác. Mỗi công việc, dù nhỏ bé hay tầm thường, đều có thể trở thành lời cầu nguyện.",
                "Ngài nhấn mạnh sự liêm chính và công bằng trong môi trường làm việc, coi đó là biểu hiện cụ thể của đức tin sống động."
            ],
            keyPrinciples: [
                "Làm việc với tinh thần trách nhiệm và yêu thương.",
                "Đối xử công bằng và tôn trọng đồng nghiệp.",
                "Là chứng nhân của sự trung thực và liêm chính."
            ],
            reflection: "Công việc của tôi có trở thành lời cầu nguyện không? Hay chỉ là gánh nặng và áp lực?"
        },
        {
            id: "thu-thach",
            title: "Khi Gặp Thử Thách",
            summary: "Tìm thấy ý nghĩa trong đau khổ và thất bại.",
            content: [
                "Từ chính kinh nghiệm 13 năm tù đày, Đức Hồng y đã để lại cho chúng ta bài học quý giá về cách đối diện với thử thách. Ngài không chọn đau khổ, nhưng ngài chọn cách sống với đau khổ trong tinh thần hy vọng.",
                "Ngài dạy rằng không hoàn cảnh nào có thể cướp mất niềm vui nội tâm nếu chúng ta chọn đặt niềm tin vào Thiên Chúa thay vì vào hoàn cảnh."
            ],
            keyPrinciples: [
                "Chấp nhận hoàn cảnh hiện tại như ý Chúa.",
                "Dâng những hy sinh nhỏ bé để cầu nguyện cho người khác.",
                "Không để hoàn cảnh cướp mất niềm vui nội tâm."
            ],
            reflection: "Tôi thường phản ứng thế nào khi mọi sự không như ý? Cay đắng hay tin tưởng phó thác?"
        }
    ]

    return (
        <div className="min-h-screen bg-background pb-20">
            <ReadingProgress />

            {/* Hero Header */}
            <section className="bg-catholic-gold/10 py-16 md:py-24 border-b border-border">
                <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
                    <Badge variant="outline" className="text-catholic-gold border-catholic-gold uppercase tracking-widest mb-4">
                        Ứng Dụng
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        Sống Đạo Giữa Đời
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        "Nên thánh không phải là làm những việc phi thường, nhưng là làm những việc bình thường với một tình yêu phi thường."
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
                                    {applications.map((app) => (
                                        <a
                                            key={app.id}
                                            href={`#${app.id}`}
                                            className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold/50 flex-shrink-0"></span>
                                            <span className="line-clamp-2">{app.title}</span>
                                        </a>
                                    ))}
                                    <a
                                        href="#ket-luan"
                                        className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg transition-all hover:bg-muted hover:text-catholic-gold text-foreground/70 hover:translate-x-1"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold/50 flex-shrink-0"></span>
                                        <span>Kết Luận</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content - RIGHT SIDE */}
                    <main className="lg:col-span-9 space-y-16">
                        {applications.map((app) => (
                            <article key={app.id} id={app.id} className="scroll-mt-24 space-y-8">
                                <header className="border-l-4 border-catholic-gold pl-6 py-2">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                                        {app.title}
                                    </h2>
                                </header>

                                <blockquote className="text-lg text-muted-foreground font-serif italic border-b border-border pb-6">
                                    "{app.summary}"
                                </blockquote>

                                <div className="space-y-10">
                                    <section className="space-y-4">
                                        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed font-serif">
                                            {app.content.map((paragraph, pIdx) => (
                                                <p key={pIdx} className="mb-4 text-justify">{paragraph}</p>
                                            ))}
                                        </div>

                                        {app.keyPrinciples && app.keyPrinciples.length > 0 && (
                                            <div className="my-6 px-6 py-5 bg-muted/50 border-l-4 border-catholic-gold rounded-r-lg">
                                                <h4 className="font-semibold text-sm mb-3 text-catholic-gold uppercase tracking-wide">
                                                    Hướng dẫn thực hành
                                                </h4>
                                                <ul className="space-y-2">
                                                    {app.keyPrinciples.map((principle, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-foreground/80">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold mt-2 flex-shrink-0"></span>
                                                            <span className="font-serif">{principle}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {app.reflection && (
                                            <div className="my-6 px-6 py-5 bg-catholic-gold/5 border border-catholic-gold/20 rounded-lg">
                                                <h4 className="font-semibold text-sm mb-3 text-catholic-gold uppercase tracking-wide">
                                                    Câu hỏi suy ngẫm
                                                </h4>
                                                <p className="font-serif italic text-foreground/80">
                                                    "{app.reflection}"
                                                </p>
                                            </div>
                                        )}
                                    </section>
                                </div>
                            </article>
                        ))}

                        {/* Kết Luận Section */}
                        <section id="ket-luan" className="pt-12 border-t border-border scroll-mt-24">
                            <header className="border-l-4 border-catholic-gold pl-6 py-2 mb-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                                    Kết Luận
                                </h2>
                            </header>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed font-serif">
                                <p className="text-justify">
                                    Linh đạo của Đức Hồng y Nguyễn Văn Thuận không phải là lý thuyết trừu tượng dành cho các nhà tu hành, mà là con đường sống thực tiễn cho mọi người trong mọi hoàn cảnh. Ngài đã chứng minh rằng sự thánh thiện có thể đạt được ngay trong những điều kiện khó khăn nhất.
                                </p>
                                <p className="text-justify">
                                    Điều quan trọng không phải là chúng ta làm được bao nhiêu việc lớn lao, mà là chúng ta sống mỗi giây phút với bao nhiêu tình yêu. Đó chính là bí quyết "nên thánh giữa đời thường" mà ngài đã để lại cho chúng ta.
                                </p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <APAReferences pageId="ung-dung" />
        </div>
    )
}
