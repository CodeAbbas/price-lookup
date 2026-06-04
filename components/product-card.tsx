"use client"

import { useState } from "react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // Assume the image doesn't exist or hasn't loaded yet
  const [imageLoaded, setImageLoaded] = useState(false)
  // Track if the image failed to load (404 / doesn't exist)
  const [imageError, setImageError] = useState(false)

  const imageSrc = `/product-images/${product.id}.jpg`

  // The card only shows the image layout if it successfully loads and hasn't errored out
  const shouldShowImage = imageLoaded && !imageError

  return (
    <article className="group rounded-2xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
      
      {/* Invisible image preloader to check file existence without slowing down the page */}
      {!imageError && !imageLoaded && (
        <img
          src={imageSrc}
          alt=""
          className="hidden"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}

      <div className="flex gap-4 items-center justify-between">
        
        {/* Left Side: Product Text Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-card-foreground leading-snug truncate">
                {product.name}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {product.variant}
              </p>
            </div>
          </div>
          
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
              {product.category}
            </span>
            <span className="text-xs font-mono text-muted-foreground tracking-wide bg-muted/60 px-2 py-0.5 rounded">
              {product.id}
            </span>
          </div>
        </div>

        {/* Right Side: Price & Compact Thumbnail (Only shows if file exists) */}
        <div className="flex flex-col items-end justify-between self-stretch flex-shrink-0 min-w-[80px]">
          {shouldShowImage ? (
            <div className="relative h-14 w-14 rounded-xl bg-muted overflow-hidden border border-border/60 mb-2">
              <img
                src={imageSrc}
                alt=""
                className="object-cover w-full h-full object-center"
                onError={() => setImageError(true)}
              />
            </div>
          ) : null}
          
          <span className="text-2xl font-bold tracking-tight text-card-foreground mt-auto">
            {"£"}{product.price.toLocaleString()}
          </span>
        </div>

      </div>
    </article>
  )
}
