"use client"

import { Search, X } from "lucide-react"

interface SearchHeaderProps {
  query: string
  onQueryChange: (query: string) => void
}

export function SearchHeader({ query, onQueryChange }: SearchHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            PriceList 2026
          </h1>
          <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
            Staff Only
          </span>
        </div>
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search products, codes, sizes..."
            className="w-full rounded-2xl border border-border bg-input py-3.5 pl-12 pr-12 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-foreground/20 transition-all shadow-sm"
            aria-label="Search products"
          />
          {query.length > 0 && (
            <button
              onClick={() => onQueryChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-muted p-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
