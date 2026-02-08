import { Cross } from "lucide-react"

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            <div className="relative">
                <div className="absolute inset-0 bg-catholic-gold/20 rounded-full animate-ping" />
                <div className="relative bg-background p-4 rounded-full border-2 border-catholic-gold">
                    <Cross className="h-8 w-8 text-catholic-gold animate-pulse" />
                </div>
            </div>
            <p className="text-muted-foreground font-serif italic animate-pulse">
                Đang tải...
            </p>
        </div>
    )
}
