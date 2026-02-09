import { ReadingProgress } from "@/components/ui/reading-progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle, Star, Users, Heart, Mail } from "lucide-react"

export default function CanonizationPage() {
    const timeline = [
        {
            date: "16/09/2002",
            title: "Qua đời",
            description: "Đức Hồng y qua đời tại Roma sau thời gian chống chọi với bệnh ung thư.",
            status: "completed"
        },
        {
            date: "02/03/2007",
            title: "Xin phép khởi sự",
            description: "Đức Hồng y Renato R. Martino xin phép Đức Hồng y Camillo Ruini, Đại diện Roma.",
            status: "completed"
        },
        {
            date: "17/04/2007",
            title: "Chấp thuận",
            description: "Hội đồng Giám mục vùng Latium chấp thuận việc khởi sự án phong thánh.",
            status: "completed"
        },
        {
            date: "17/09/2007",
            title: "Khai mạc giai đoạn sơ bộ",
            description: "Khai mạc giai đoạn sơ bộ với sự hiện diện của Đức Giáo hoàng Bênêđictô XVI tại Castelgandolfo.",
            status: "completed"
        },
        {
            date: "16/01/2009",
            title: "Công bố Chiếu chỉ",
            description: "Chiếu chỉ (Edict) về án phong thánh được công bố chính thức.",
            status: "completed"
        },
        {
            date: "22/10/2010",
            title: "Mở tiến trình giáo phận",
            description: "Đức Hồng y Peter K.A. Turkson chủ sự lễ khai mạc công khai tiến trình cấp giáo phận tại Tòa án Roma.",
            status: "completed"
        },
        {
            date: "08/06/2012",
            title: "Di dời thi hài",
            description: "Thi hài được di chuyển từ nghĩa trang Verano đến nhà thờ Santa Maria della Scala, Roma, để tín hữu hành hương viếng thăm.",
            status: "completed"
        },
        {
            date: "2013",
            title: "Kết thúc giai đoạn giáo phận",
            description: "Giai đoạn điều tra cấp giáo phận hoàn tất, hồ sơ được chuyển lên Vatican.",
            status: "completed"
        },
        {
            date: "04/05/2017",
            title: "Đấng Đáng Kính",
            description: "Đức Giáo hoàng Phanxicô ký sắc lệnh công nhận các nhân đức anh hùng, tuyên bố ngài là Đấng Đáng Kính (Venerable).",
            status: "current",
            highlight: true
        },
        {
            date: "Chờ đợi",
            title: "Chân Phước",
            description: "Cần 1 phép lạ được xác nhận qua sự chuyển cầu của ngài.",
            status: "pending"
        },
        {
            date: "Tương lai",
            title: "Hiển Thánh",
            description: "Cần thêm 1 phép lạ thứ hai sau khi được phong Chân Phước.",
            status: "pending"
        }
    ]

    const organizations = [
        {
            name: "Hội đồng Giáo hoàng Công lý và Hòa bình",
            role: "Cơ quan chủ trì thúc đẩy án phong thánh",
            leaders: "ĐHY Renato R. Martino (2007), ĐHY Peter K.A. Turkson (2010)"
        },
        {
            name: "Tòa Đại diện Roma",
            role: "Thụ lý tiến trình cấp giáo phận",
            leaders: "ĐHY Camillo Ruini, ĐHY Agostino Vallini"
        },
        {
            name: "Bộ Phong Thánh Vatican",
            role: "Thẩm định hồ sơ và phép lạ",
            leaders: "Congregation for the Causes of Saints"
        },
        {
            name: "Thỉnh nguyện viên (Postulator)",
            role: "Điều phối án phong thánh",
            leaders: "Silvia Monica Correale"
        },
        {
            name: "Cardinal Van Thuan Foundation",
            role: "Bảo tồn di sản và thúc đẩy án phong thánh",
            leaders: "www.cardinalvanthuan.org"
        }
    ]

    return (
        <div className="min-h-screen bg-background pb-20">
            <ReadingProgress />

            {/* Hero Header */}
            <section className="bg-gradient-to-b from-catholic-gold/20 to-background py-16 md:py-24 border-b border-border">
                <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto space-y-6">
                    <Badge variant="outline" className="text-catholic-gold border-catholic-gold uppercase tracking-widest mb-4">
                        Án Phong Thánh
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        Tiến Trình Phong Thánh
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        Hành trình từ Đấng Đáng Kính đến Hiển Thánh
                    </p>

                    {/* Current Status Badge */}
                    <div className="mt-8 inline-flex items-center gap-3 bg-catholic-gold/10 border border-catholic-gold/30 rounded-full px-6 py-3">
                        <Star className="h-5 w-5 text-catholic-gold fill-catholic-gold" />
                        <span className="font-semibold text-foreground">Trạng thái hiện tại: <span className="text-catholic-gold">ĐẤNG ĐÁNG KÍNH</span></span>
                        <span className="text-sm text-muted-foreground">(từ 04/05/2017)</span>
                    </div>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12 md:py-16 max-w-5xl mx-auto space-y-16">

                {/* What is Venerable */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        "Đấng Đáng Kính" là gì?
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed font-serif">
                        <p className="text-justify">
                            <strong>"Đấng Đáng Kính" (Venerable)</strong> là tước hiệu được Đức Giáo hoàng ban cho một người đã qua đời sau khi Giáo Hội xác nhận người đó đã sống các nhân đức Kitô giáo ở mức độ anh hùng (heroic virtues). Đây là bước thứ hai trong tiến trình phong thánh của Giáo Hội Công giáo.
                        </p>
                        <p className="text-justify">
                            Ngày 4 tháng 5 năm 2017, Đức Giáo hoàng Phanxicô đã ký sắc lệnh công nhận Đức Hồng y Phanxicô Xaviê Nguyễn Văn Thuận đã sống các nhân đức đức tin, đức cậy, đức mến, và các nhân đức khôn ngoan, công bình, can đảm, tiết độ ở mức độ anh hùng. Điều này có nghĩa là cuộc đời ngài đã được điều tra kỹ lưỡng và được công nhận là mẫu gương thánh thiện đích thực.
                        </p>
                    </div>
                </section>

                {/* Canonization Steps */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        Các Bước Phong Thánh
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Card className="border-catholic-gold/30 bg-catholic-gold/5">
                            <CardContent className="p-6 text-center space-y-3">
                                <div className="w-12 h-12 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-green-500" />
                                </div>
                                <h3 className="font-bold text-lg">1. Tôi Tớ Chúa</h3>
                                <p className="text-sm text-muted-foreground">Servant of God</p>
                                <p className="text-xs">Khi án phong thánh được mở</p>
                            </CardContent>
                        </Card>
                        <Card className="border-catholic-gold bg-catholic-gold/10 ring-2 ring-catholic-gold">
                            <CardContent className="p-6 text-center space-y-3">
                                <div className="w-12 h-12 mx-auto rounded-full bg-catholic-gold/30 flex items-center justify-center">
                                    <Star className="h-6 w-6 text-catholic-gold fill-catholic-gold" />
                                </div>
                                <h3 className="font-bold text-lg text-catholic-gold">2. Đấng Đáng Kính</h3>
                                <p className="text-sm text-muted-foreground">Venerable</p>
                                <p className="text-xs font-semibold text-catholic-gold">← HIỆN TẠI</p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/50 bg-muted/30">
                            <CardContent className="p-6 text-center space-y-3">
                                <div className="w-12 h-12 mx-auto rounded-full bg-muted flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <h3 className="font-bold text-lg text-muted-foreground">3. Chân Phước</h3>
                                <p className="text-sm text-muted-foreground">Blessed</p>
                                <p className="text-xs text-muted-foreground">Cần 1 phép lạ</p>
                            </CardContent>
                        </Card>
                        <Card className="border-border/50 bg-muted/30">
                            <CardContent className="p-6 text-center space-y-3">
                                <div className="w-12 h-12 mx-auto rounded-full bg-muted flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <h3 className="font-bold text-lg text-muted-foreground">4. Hiển Thánh</h3>
                                <p className="text-sm text-muted-foreground">Saint</p>
                                <p className="text-xs text-muted-foreground">Cần thêm 1 phép lạ</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Timeline */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        Tiến Trình Theo Thời Gian
                    </h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline dot */}
                                    <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${item.status === 'completed' ? 'bg-green-500 border-green-600' :
                                            item.status === 'current' ? 'bg-catholic-gold border-catholic-gold animate-pulse' :
                                                'bg-muted border-border'
                                        }`}></div>

                                    {/* Content */}
                                    <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                                        <Card className={item.highlight ? 'border-catholic-gold bg-catholic-gold/5' : ''}>
                                            <CardContent className="p-4">
                                                <span className={`text-sm font-bold ${item.status === 'current' ? 'text-catholic-gold' : 'text-muted-foreground'}`}>
                                                    {item.date}
                                                </span>
                                                <h3 className={`font-bold text-lg mt-1 ${item.status === 'current' ? 'text-catholic-gold' : ''}`}>
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mt-2">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's Needed */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        Điều Kiện Còn Lại
                    </h2>
                    <Card className="border-catholic-gold/30">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                                        <Heart className="h-5 w-5 text-catholic-gold" />
                                        Để được phong Chân Phước
                                    </h3>
                                    <p className="text-foreground/80">
                                        Cần xác minh <strong>một phép lạ</strong> xảy ra qua sự chuyển cầu của Đức Hồng y Nguyễn Văn Thuận. Phép lạ thường là:
                                    </p>
                                    <ul className="space-y-2 text-sm text-foreground/70">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold mt-2"></span>
                                            <span>Một sự chữa lành y khoa không thể giải thích được</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold mt-2"></span>
                                            <span>Xảy ra sau khi cầu nguyện xin ngài chuyển cầu</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-catholic-gold mt-2"></span>
                                            <span>Được các chuyên gia y khoa và thần học xác nhận</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                                        <Star className="h-5 w-5 text-catholic-gold" />
                                        Để được phong Hiển Thánh
                                    </h3>
                                    <p className="text-foreground/80">
                                        Sau khi được phong Chân Phước, cần xác minh thêm <strong>một phép lạ thứ hai</strong> xảy ra sau ngày phong Chân Phước.
                                    </p>
                                    <div className="p-4 bg-muted/50 rounded-lg">
                                        <p className="text-sm italic text-foreground/70">
                                            "Nhiều người Công giáo Việt Nam đã coi ngài như một vị thánh trên thực tế, dù chưa được Giáo Hội chính thức công nhận."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Organizations */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        Các Tổ Chức Liên Quan
                    </h2>
                    <div className="grid gap-4">
                        {organizations.map((org, index) => (
                            <Card key={index}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-catholic-gold/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="h-5 w-5 text-catholic-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground">{org.name}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{org.role}</p>
                                        <p className="text-xs text-catholic-gold mt-2">{org.leaders}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Prayer */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        Kinh Cầu Xin Ơn Phong Thánh
                    </h2>
                    <Card className="border-catholic-gold/30 bg-gradient-to-br from-catholic-gold/5 to-transparent">
                        <CardContent className="p-8">
                            <blockquote className="font-serif italic text-lg text-foreground/90 leading-relaxed space-y-4">
                                <p>
                                    Lạy Chúa, Chúa đã ban cho Đức Hồng y Phanxicô Xaviê Nguyễn Văn Thuận trở thành chứng nhân hy vọng trong những năm tháng tù đày.
                                </p>
                                <p>
                                    Xin cho chúng con biết noi gương ngài, sống trọn vẹn từng giây phút hiện tại với tình yêu, phân biệt Chúa với công việc của Chúa, và luôn tin tưởng phó thác vào sự quan phòng của Chúa.
                                </p>
                                <p>
                                    Nếu đẹp ý Chúa, xin ban cho Giáo Hội sớm được tôn kính ngài trên bàn thờ, để gương sáng của ngài tiếp tục lan tỏa hy vọng cho thế giới.
                                </p>
                                <p className="text-right font-semibold">
                                    Nhờ Đức Kitô, Chúa chúng con. Amen.
                                </p>
                            </blockquote>
                        </CardContent>
                    </Card>
                </section>

                {/* Report Miracle */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        Báo Cáo Phép Lạ
                    </h2>
                    <Card>
                        <CardContent className="p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-catholic-gold/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-6 w-6 text-catholic-gold" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-foreground/85">
                                        Nếu bạn tin rằng đã nhận được ơn lạ qua sự chuyển cầu của Đức Hồng y Nguyễn Văn Thuận, xin hãy liên hệ với:
                                    </p>
                                    <div className="p-4 bg-muted/50 rounded-lg">
                                        <p className="font-semibold">Cardinal Van Thuan Foundation</p>
                                        <p className="text-sm text-muted-foreground">Website: www.cardinalvanthuan.org</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Mọi báo cáo sẽ được xem xét cẩn thận bởi các chuyên gia y khoa và thần học để xác minh tính xác thực.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Tomb Location */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground border-l-4 border-catholic-gold pl-6">
                        Nơi An Nghỉ
                    </h2>
                    <Card className="overflow-hidden">
                        <CardContent className="p-8">
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-foreground">Nhà thờ Santa Maria della Scala</h3>
                                <p className="text-foreground/80">
                                    Thi hài Đức Hồng y được an táng tại nhà thờ Santa Maria della Scala, Roma, Ý – nơi tín hữu có thể đến hành hương và cầu nguyện.
                                </p>
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <p className="font-semibold">Địa chỉ:</p>
                                    <p className="text-sm text-muted-foreground">Piazza della Scala, 23, 00153 Roma RM, Italy</p>
                                </div>
                                <p className="text-sm text-muted-foreground italic">
                                    Thi hài được di chuyển từ nghĩa trang Verano đến đây vào ngày 8 tháng 6 năm 2012.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    )
}
