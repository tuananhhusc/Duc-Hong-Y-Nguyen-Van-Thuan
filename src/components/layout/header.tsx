"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X, Cross } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
    { name: "Tiểu sử", href: "/tieu-su" },
    { name: "Linh đạo", href: "/linh-dao" },
    { name: "Đường Hy Vọng", href: "/duong-hy-vong" },
    { name: "Ứng dụng", href: "/ung-dung" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-gray bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 w-full items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-serif font-bold text-xl text-foreground hover:text-catholic-gold transition-colors">
                        {/* Removed Cross icon to match the text-only style of Image 2 if implied, but keeping text structure */}
                        <span className="hidden sm:inline-block text-xl">ĐHY Nguyễn Văn Thuận</span>
                        <span className="sm:hidden">ĐHY NVT</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                                    isActive
                                        ? "bg-[#F5F0E6] text-[#D02F2F] font-bold dark:bg-catholic-gold/20 dark:text-catholic-gold"
                                        : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border-gray bg-background">
                    <div className="container mx-auto px-4 py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                                    pathname === item.href
                                        ? "bg-[#F5F0E6] text-[#D02F2F] dark:bg-catholic-gold/20 dark:text-catholic-gold"
                                        : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
