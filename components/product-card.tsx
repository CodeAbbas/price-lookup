import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-card-foreground leading-snug truncate">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.variant}
          </p>
        </div>
        <span className="flex-shrink-0 inline-flex items-center rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          {product.category}
        </span>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-xs font-mono text-muted-foreground tracking-wide">
          {product.id}
        </span>
        <span className="text-2xl font-bold tracking-tight text-card-foreground">
          {"£"}{product.price.toLocaleString()}
        </span>
      </div>
    </article>
  )
}
