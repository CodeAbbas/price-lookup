"use client"

import { categories, type Category } from "@/lib/products"

interface CategoryFiltersProps {
  active: Category
  onSelect: (cat: Category) => void
  counts: Record<string, number>
}

export function CategoryFilters({ active, onSelect, counts }: CategoryFiltersProps) {
  return (
    <nav
      className="mx-auto max-w-5xl px-4 py-3"
      aria-label="Filter by category"
    >
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" role="tablist">
        {categories.map((cat) => {
          const isActive = active === cat
          const count = cat === "All"
            ? Object.values(counts).reduce((a, b) => a + b, 0)
            : counts[cat] ?? 0

          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(cat)}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-secondary-foreground border border-border hover:bg-accent"
              }`}
            >
              {cat}
              <span
                className={`inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-xs font-medium min-w-[1.25rem] ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
