import type { Product } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-8">
      <p className="mb-4 text-sm text-muted-foreground">
        {products.length} {products.length === 1 ? "item" : "items"}
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
