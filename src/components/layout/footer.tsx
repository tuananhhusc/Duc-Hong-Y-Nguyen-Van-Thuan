import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border-gray bg-parchment-bg dark:bg-background">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand & Quote */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-bold text-catholic-gold">
                            Đức Hồng Y Phanxicô Xaviê Nguyễn Văn Thuận
                        </h3>
                        <blockquote className="italic text-foreground/80 border-l-2 border-catholic-gold pl-4 text-sm">
                            "Con phải phân biệt giữa Thiên Chúa và các công việc của Thiên Chúa."
                        </blockquote>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="font-serif font-semibold text-foreground">Liên kết</h4>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li>
                                <Link href="/tieu-su" className="hover:text-catholic-gold transition-colors">
                                    Tiểu sử & Cuộc đời
                                </Link>
                            </li>
                            <li>
                                <Link href="/duong-hy-vong" className="hover:text-catholic-gold transition-colors">
                                    Đường Hy Vọng (1001 câu)
                                </Link>
                            </li>
                            <li>
                                <Link href="/tai-lieu" className="hover:text-catholic-gold transition-colors">
                                    Tài liệu tham khảo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact / Info */}
                    <div className="space-y-4">
                        <h4 className="font-serif font-semibold text-foreground">Thông tin</h4>
                        <p className="text-sm text-foreground/70">
                            Website nghiên cứu và lưu trữ di sản của Đấng Đáng Kính - Đức Hồng Y Phanxicô Xaviê Nguyễn Văn Thuận.
                        </p>
                        <p className="text-xs text-foreground/50 mt-4">
                            &copy; {new Date().getFullYear()}  Đức Hồng Y Phanxicô Xaviê Nguyễn Văn Thuận. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
