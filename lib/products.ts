export interface Product {
  id: string
  category: string
  name: string
  variant: string
  price: number
  type: string
}

export const products: Product[] = [
  // Bedroom Sets
  { id: "BS-001", category: "Bedroom Sets", name: "Wavy Set", variant: "Double", price: 230, type: "Bed Set" },
  { id: "BS-002", category: "Bedroom Sets", name: "Wavy Set", variant: "King", price: 240, type: "Bed Set" },
  { id: "BS-003", category: "Bedroom Sets", name: "New York Set", variant: "Double", price: 250, type: "Bed Set" },
  { id: "BS-004", category: "Bedroom Sets", name: "New York Set", variant: "King", price: 1115, type: "Bed Set" },
  { id: "BS-005", category: "Bedroom Sets", name: "Zenith Set", variant: "King", price: 270, type: "Bed Set" },
  { id: "BS-006", category: "Bedroom Sets", name: "Zenith Set", variant: "Double", price: 335, type: "Bed Set" },

  // 305 Series
  { id: "305-001", category: "305 Series", name: "305 White Set", variant: "Double", price: 1135, type: "Bed Set" },
  { id: "305-002", category: "305 Series", name: "305 Black Set", variant: "Single", price: 95, type: "Bed Set" },
  { id: "305-003", category: "305 Series", name: "305 Black Set", variant: "Double", price: 110, type: "Bed Set" },
  { id: "305-004", category: "305 Series", name: "305 Grey Paint Set", variant: "Double", price: 1195, type: "Bed Set" },

  // Wardrobes
  { id: "WR-001", category: "Wardrobes", name: "202 Slider", variant: "Single", price: 315, type: "Wardrobe" },
  { id: "WR-002", category: "Wardrobes", name: "202 Slider", variant: "200cm", price: 420, type: "Wardrobe" },
  { id: "WR-003", category: "Wardrobes", name: "W01", variant: "Small Double", price: 335, type: "Wardrobe" },
  { id: "WR-004", category: "Wardrobes", name: "W01", variant: "180cm", price: 400, type: "Wardrobe" },
  { id: "WR-005", category: "Wardrobes", name: "W04", variant: "Superking", price: 400, type: "Wardrobe" },
  { id: "WR-006", category: "Wardrobes", name: "KY05", variant: "Double", price: 400, type: "Wardrobe" },

  // Sofa Beds
  { id: "SB-001", category: "Sofa Beds", name: "Lotto", variant: "3 Seater", price: 500, type: "Sofa Bed" },
  { id: "SB-002", category: "Sofa Beds", name: "Lotto", variant: "2 Seater", price: 400, type: "Sofa Bed" },
  { id: "SB-003", category: "Sofa Beds", name: "Lotto", variant: "3+2 Set", price: 800, type: "Sofa Bed" },
  { id: "SB-004", category: "Sofa Beds", name: "Punto", variant: "3 Seater", price: 550, type: "Sofa Bed" },
  { id: "SB-005", category: "Sofa Beds", name: "Punto", variant: "3+2 Set", price: 900, type: "Sofa Bed" },
  { id: "SB-006", category: "Sofa Beds", name: "Milano", variant: "3 Seater", price: 525, type: "Sofa Bed" },
  { id: "SB-007", category: "Sofa Beds", name: "Milano", variant: "3+2 Set", price: 850, type: "Sofa Bed" },

  // Drawers
  { id: "DR-001", category: "Drawers", name: "KY500", variant: "80cm", price: 100, type: "Drawer" },
  { id: "DR-002", category: "Drawers", name: "D04", variant: "80cm", price: 130, type: "Drawer" },
  { id: "DR-003", category: "Drawers", name: "CD3+3", variant: "120cm", price: 125, type: "Drawer" },

  // Living
  { id: "LV-001", category: "Living", name: "TV01 Unit", variant: "180cm", price: 220, type: "TV Unit" },
  { id: "LV-002", category: "Living", name: "XE02A Shoe Rack", variant: "Standard", price: 125, type: "Shoe Rack" },
]

export const categories = [
  "All",
  "Bedroom Sets",
  "305 Series",
  "Wardrobes",
  "Sofa Beds",
  "Drawers",
  "Living",
] as const

export type Category = (typeof categories)[number]
