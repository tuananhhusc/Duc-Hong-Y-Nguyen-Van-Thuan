import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center">
            <h2 className="text-4xl font-serif font-bold text-sacred-red">404 - Không tìm thấy trang</h2>
            <p className="text-muted-foreground max-w-md">
                Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển đi.
            </p>
            <Link href="/">
                <Button>Trở về Trang chủ</Button>
            </Link>
        </div>
    )
}
