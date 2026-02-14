"use client"

import { useState, useMemo } from "react"
import { products, type Category } from "@/lib/products"
import { SearchHeader } from "@/components/search-header"
import { CategoryFilters } from "@/components/category-filters"
import { ProductGrid } from "@/components/product-grid"
import { NoResults } from "@/components/no-results"

export default function PriceLookup() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const p of products) {
      counts[p.category] = (counts[p.category] ?? 0) + 1
    }
    return counts
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()

    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory

      if (!matchesCategory) return false
      if (!q) return true

      return (
        p.name.toLowerCase().includes(q) ||
        p.variant.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.price.toString().includes(q)
      )
    })
  }, [query, activeCategory])

  const handleClear = () => {
    setQuery("")
    setActiveCategory("All")
  }

  return (
    <main className="min-h-screen bg-background">
      <SearchHeader query={query} onQueryChange={setQuery} />
      <CategoryFilters
        active={activeCategory}
        onSelect={setActiveCategory}
        counts={categoryCounts}
      />
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <NoResults query={query || activeCategory} onClear={handleClear} />
      )}
    </main>
  )
}
