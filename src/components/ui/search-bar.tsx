"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export interface SearchBarProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
    ({ className, containerClassName, ...props }, ref) => {
        return (
            <div className={cn("relative flex items-center", containerClassName)}>
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <Input
                    ref={ref}
                    className={cn("pl-9 bg-background/50", className)}
                    {...props}
                />
            </div>
        )
    }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
