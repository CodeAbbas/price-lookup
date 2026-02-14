import { SearchX } from "lucide-react"

interface NoResultsProps {
  query: string
  onClear: () => void
}

export function NoResults({ query, onClear }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="flex items-center justify-center rounded-full bg-muted p-4 mb-4">
        <SearchX size={28} className="text-muted-foreground" />
      </div>
      <h2 className="text-lg font-semibold text-foreground mb-1">
        No results found
      </h2>
      <p className="text-sm text-muted-foreground max-w-xs mb-5">
        {"Nothing matched \""}{query}{"\""}. Try a different search term or clear your filters.
      </p>
      <button
        onClick={onClear}
        className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Clear search
      </button>
    </div>
  )
}
