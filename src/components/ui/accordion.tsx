"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface AccordionProps {
    items: {
        id: string
        trigger: React.ReactNode
        content: React.ReactNode
    }[]
    className?: string
    allowMultiple?: boolean
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
    const [openItems, setOpenItems] = React.useState<string[]>([])

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            )
        } else {
            setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
        }
    }

    return (
        <div className={cn("space-y-2", className)}>
            {items.map((item) => (
                <div key={item.id} className="border border-border-gray rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="flex w-full items-center justify-between p-4 text-left font-medium transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-expanded={openItems.includes(item.id)}
                    >
                        {item.trigger}
                        <ChevronDown
                            className={cn(
                                "h-4 w-4 shrink-0 transition-transform duration-200",
                                openItems.includes(item.id) && "rotate-180"
                            )}
                        />
                    </button>
                    <AnimatePresence initial={false}>
                        {openItems.includes(item.id) && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 pt-0 text-sm text-foreground/80 border-t border-border-gray/50 bg-background/50">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
