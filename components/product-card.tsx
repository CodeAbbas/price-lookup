import type { Product } from "@/lib/products"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // If no custom imageUrl override is specified, predict it locally using the ID
  const imageSrc = product.imageUrl || `/product-images/${product.id}.jpg`

  return (
    <article className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Visual Workspace Container */}
      <div className="relative aspect-square w-full bg-muted overflow-hidden border-b border-border/50">
        <img
          src={imageSrc}
          alt={`${product.name} - ${product.variant}`}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Graceful fallback if an item image hasn't been uploaded to the repo yet
            e.currentTarget.src = "https://placehold.co/600x600/e5e5e5/a3a3a3?text=No+Image"
          }}
        />
      </div>

      {/* Content Meta Text Block */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
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
        </div>

        <div className="mt-5 flex items-end justify-between">
          <span className="text-xs font-mono text-muted-foreground tracking-wide bg-muted/60 px-2 py-0.5 rounded">
            {product.id}
          </span>
          <span className="text-2xl font-bold tracking-tight text-card-foreground">
            {"£"}{product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </article>
  )
}
