export interface Product {
  id: string
  category: string
  name: string
  variant: string
  price: number
  type: string
}

export const products: Product[] = [
  // --- Bedroom Sets ---
  { id: "BS-001", category: "Bedroom Sets", name: "Wavy Set", variant: "Double", price: 1105, type: "Bed Set" },
  { id: "BS-002", category: "Bedroom Sets", name: "Wavy Set", variant: "King", price: 1115, type: "Bed Set" },
  { id: "BS-003", category: "Bedroom Sets", name: "New York Set", variant: "Double", price: 1105, type: "Bed Set" },
  { id: "BS-004", category: "Bedroom Sets", name: "New York Set", variant: "King", price: 1115, type: "Bed Set" },
  { id: "BS-005", category: "Bedroom Sets", name: "Zenith Set", variant: "Double", price: 1300, type: "Bed Set" },
  { id: "BS-006", category: "Bedroom Sets", name: "Zenith Set", variant: "King", price: 1310, type: "Bed Set" },
  { id: "BS-007", category: "Bedroom Sets", name: "B02 White Set", variant: "Double", price: 1070, type: "Bed Set" },
  { id: "BS-008", category: "Bedroom Sets", name: "B02 White Set", variant: "King", price: 1080, type: "Bed Set" },
  { id: "BS-009", category: "Bedroom Sets", name: "B01 Set", variant: "Double", price: 1190, type: "Bed Set" },
  { id: "BS-010", category: "Bedroom Sets", name: "B01 Set", variant: "King", price: 1200, type: "Bed Set" },
  { id: "BS-011", category: "Bedroom Sets", name: "B04 Grey Set", variant: "Double", price: 725, type: "Bed Set" },
  { id: "BS-012", category: "Bedroom Sets", name: "B04 Grey Set", variant: "King", price: 735, type: "Bed Set" },
  { id: "BS-013", category: "Bedroom Sets", name: "B04 White Set", variant: "Double", price: 625, type: "Bed Set" },
  { id: "BS-014", category: "Bedroom Sets", name: "B04 White Set", variant: "King", price: 635, type: "Bed Set" },

  // --- 305 Series ---
  { id: "305-001", category: "305 Series", name: "305 White Set", variant: "Double", price: 1135, type: "Bed Set" },
  { id: "305-002", category: "305 Series", name: "305 White Set", variant: "King", price: 1145, type: "Bed Set" },
  { id: "305-003", category: "305 Series", name: "305 Black Set", variant: "Double", price: 1065, type: "Bed Set" },
  { id: "305-004", category: "305 Series", name: "305 Black Set", variant: "King", price: 1075, type: "Bed Set" },
  { id: "305-005", category: "305 Series", name: "305 Grey Paint Set", variant: "Double", price: 1195, type: "Bed Set" },
  { id: "305-006", category: "305 Series", name: "305 Grey Paint Set", variant: "King", price: 1205, type: "Bed Set" },
  { id: "305-007", category: "305 Series", name: "305 Brown Set", variant: "Double", price: 1085, type: "Bed Set" },
  { id: "305-008", category: "305 Series", name: "305 Brown Set", variant: "King", price: 1095, type: "Bed Set" },
  { id: "305-009", category: "305 Series", name: "305 Grey Set", variant: "Double", price: 985, type: "Bed Set" },
  { id: "305-010", category: "305 Series", name: "305 Grey Set", variant: "King", price: 995, type: "Bed Set" },

  // --- Wardrobes ---
  { id: "WR-001", category: "Wardrobes", name: "202", variant: "Single", price: 315, type: "Wardrobe" },
  { id: "WR-002", category: "Wardrobes", name: "202", variant: "200cm", price: 420, type: "Wardrobe" },
  { id: "WR-003", category: "Wardrobes", name: "W01", variant: "Small Double", price: 335, type: "Wardrobe" },
  { id: "WR-004", category: "Wardrobes", name: "W01", variant: "180cm", price: 400, type: "Wardrobe" },
  { id: "WR-005", category: "Wardrobes", name: "W02", variant: "Double", price: 335, type: "Wardrobe" },
  { id: "WR-006", category: "Wardrobes", name: "W02", variant: "200cm", price: 420, type: "Wardrobe" },
  { id: "WR-007", category: "Wardrobes", name: "W03", variant: "King", price: 345, type: "Wardrobe" },
  { id: "WR-008", category: "Wardrobes", name: "W03", variant: "240cm", price: 490, type: "Wardrobe" },
  { id: "WR-009", category: "Wardrobes", name: "W04", variant: "Superking", price: 400, type: "Wardrobe" },
  { id: "WR-010", category: "Wardrobes", name: "W04", variant: "150cm", price: 370, type: "Wardrobe" },
  { id: "WR-011", category: "Wardrobes", name: "W07", variant: "Double", price: 365, type: "Wardrobe" },
  { id: "WR-012", category: "Wardrobes", name: "W07", variant: "200cm", price: 420, type: "Wardrobe" },
  { id: "WR-013", category: "Wardrobes", name: "W10", variant: "King", price: 375, type: "Wardrobe" },
  { id: "WR-014", category: "Wardrobes", name: "W10", variant: "180cm", price: 450, type: "Wardrobe" },
  { id: "WR-015", category: "Wardrobes", name: "Wavy", variant: "Double", price: 335, type: "Wardrobe" },
  { id: "WR-016", category: "Wardrobes", name: "Wavy", variant: "180cm", price: 400, type: "Wardrobe" },
  { id: "WR-017", category: "Wardrobes", name: "KY02", variant: "King", price: 345, type: "Wardrobe" },
  { id: "WR-018", category: "Wardrobes", name: "KY02", variant: "90cm", price: 160, type: "Wardrobe" },
  { id: "WR-019", category: "Wardrobes", name: "KY03", variant: "Double", price: 350, type: "Wardrobe" },
  { id: "WR-020", category: "Wardrobes", name: "KY03", variant: "135cm", price: 200, type: "Wardrobe" },
  { id: "WR-021", category: "Wardrobes", name: "KY04", variant: "King", price: 360, type: "Wardrobe" },
  { id: "WR-022", category: "Wardrobes", name: "KY04", variant: "180cm", price: 300, type: "Wardrobe" },
  { id: "WR-023", category: "Wardrobes", name: "KY05", variant: "Double", price: 400, type: "Wardrobe" },
  { id: "WR-024", category: "Wardrobes", name: "KY05", variant: "315cm", price: 340, type: "Wardrobe" },

  // --- Sofa Beds ---
  { id: "SB-001", category: "Sofa Beds", name: "Lotto", variant: "3 Seater", price: 500, type: "Sofa Bed" },
  { id: "SB-002", category: "Sofa Beds", name: "Lotto", variant: "2 Seater", price: 400, type: "Sofa Bed" },
  { id: "SB-003", category: "Sofa Beds", name: "Lotto", variant: "1 Seater", price: 300, type: "Sofa Bed" },
  { id: "SB-004", category: "Sofa Beds", name: "Lotto", variant: "3+2", price: 800, type: "Sofa Bed" },
  { id: "SB-005", category: "Sofa Beds", name: "Lotto", variant: "3+2+1", price: 1100, type: "Sofa Bed" },
  { id: "SB-006", category: "Sofa Beds", name: "Lotto", variant: "3+C+2", price: 900, type: "Sofa Bed" },
  { id: "SB-007", category: "Sofa Beds", name: "Lotto", variant: "3+Relax", price: 750, type: "Sofa Bed" },

  { id: "SB-008", category: "Sofa Beds", name: "Punto", variant: "3 Seater", price: 550, type: "Sofa Bed" },
  { id: "SB-009", category: "Sofa Beds", name: "Punto", variant: "2 Seater", price: 450, type: "Sofa Bed" },
  { id: "SB-010", category: "Sofa Beds", name: "Punto", variant: "1 Seater", price: 350, type: "Sofa Bed" },
  { id: "SB-011", category: "Sofa Beds", name: "Punto", variant: "3+2", price: 900, type: "Sofa Bed" },
  { id: "SB-012", category: "Sofa Beds", name: "Punto", variant: "3+2+1", price: 1250, type: "Sofa Bed" },
  { id: "SB-013", category: "Sofa Beds", name: "Punto", variant: "3+C+2", price: 950, type: "Sofa Bed" },
  { id: "SB-014", category: "Sofa Beds", name: "Punto", variant: "3+Relax", price: 800, type: "Sofa Bed" },

  { id: "SB-015", category: "Sofa Beds", name: "Pera", variant: "3 Seater", price: 500, type: "Sofa Bed" },
  { id: "SB-016", category: "Sofa Beds", name: "Pera", variant: "2 Seater", price: 400, type: "Sofa Bed" },
  { id: "SB-017", category: "Sofa Beds", name: "Pera", variant: "1 Seater", price: 300, type: "Sofa Bed" },
  { id: "SB-018", category: "Sofa Beds", name: "Pera", variant: "3+2", price: 800, type: "Sofa Bed" },
  { id: "SB-019", category: "Sofa Beds", name: "Pera", variant: "3+2+1", price: 1100, type: "Sofa Bed" },
  { id: "SB-020", category: "Sofa Beds", name: "Pera", variant: "3+C+2", price: 900, type: "Sofa Bed" },

  { id: "SB-021", category: "Sofa Beds", name: "Focus", variant: "3 Seater", price: 550, type: "Sofa Bed" },
  { id: "SB-022", category: "Sofa Beds", name: "Focus", variant: "2 Seater", price: 450, type: "Sofa Bed" },
  { id: "SB-023", category: "Sofa Beds", name: "Focus", variant: "1 Seater", price: 275, type: "Sofa Bed" },
  { id: "SB-024", category: "Sofa Beds", name: "Focus", variant: "3+2", price: 900, type: "Sofa Bed" },
  { id: "SB-025", category: "Sofa Beds", name: "Focus", variant: "3+2+1", price: 1175, type: "Sofa Bed" },
  { id: "SB-026", category: "Sofa Beds", name: "Focus", variant: "3+C+2", price: 1000, type: "Sofa Bed" },

  { id: "SB-027", category: "Sofa Beds", name: "Milano", variant: "3 Seater", price: 525, type: "Sofa Bed" },
  { id: "SB-028", category: "Sofa Beds", name: "Milano", variant: "2 Seater", price: 425, type: "Sofa Bed" },
  { id: "SB-029", category: "Sofa Beds", name: "Milano", variant: "1 Seater", price: 275, type: "Sofa Bed" },
  { id: "SB-030", category: "Sofa Beds", name: "Milano", variant: "3+2", price: 850, type: "Sofa Bed" },
  { id: "SB-031", category: "Sofa Beds", name: "Milano", variant: "3+2+1", price: 1125, type: "Sofa Bed" },
  { id: "SB-032", category: "Sofa Beds", name: "Milano", variant: "3+C+2", price: 950, type: "Sofa Bed" },

  { id: "SB-033", category: "Sofa Beds", name: "Karmen", variant: "3 Seater", price: 265, type: "Sofa Bed" },
  { id: "SB-034", category: "Sofa Beds", name: "Karmen", variant: "2 Seater", price: 245, type: "Sofa Bed" },
  { id: "SB-035", category: "Sofa Beds", name: "Karmen", variant: "3+2", price: 510, type: "Sofa Bed" },

  { id: "SB-036", category: "Sofa Beds", name: "Lidya", variant: "3 Seater", price: 425, type: "Sofa Bed" },
  { id: "SB-037", category: "Sofa Beds", name: "Lidya", variant: "2 Seater", price: 325, type: "Sofa Bed" },
  { id: "SB-038", category: "Sofa Beds", name: "Lidya", variant: "3+2", price: 675, type: "Sofa Bed" },

  { id: "SB-039", category: "Sofa Beds", name: "Vida", variant: "3 Seater", price: 450, type: "Sofa Bed" },
  { id: "SB-040", category: "Sofa Beds", name: "Vida", variant: "2 Seater", price: 350, type: "Sofa Bed" },
  { id: "SB-041", category: "Sofa Beds", name: "Vida", variant: "3+2", price: 700, type: "Sofa Bed" },
  { id: "SB-042", category: "Sofa Beds", name: "Vida", variant: "3+C+2", price: 800, type: "Sofa Bed" },

  { id: "SB-043", category: "Sofa Beds", name: "Oval", variant: "3 Seater", price: 450, type: "Sofa Bed" },
  { id: "SB-044", category: "Sofa Beds", name: "Oval", variant: "2 Seater", price: 350, type: "Sofa Bed" },
  { id: "SB-045", category: "Sofa Beds", name: "Oval", variant: "3+2", price: 700, type: "Sofa Bed" },
  { id: "SB-046", category: "Sofa Beds", name: "Oval", variant: "3+C+2", price: 800, type: "Sofa Bed" },

  { id: "SB-047", category: "Sofa Beds", name: "Classic", variant: "3 Seater", price: 650, type: "Sofa Bed" },
  { id: "SB-048", category: "Sofa Beds", name: "Classic", variant: "2 Seater", price: 550, type: "Sofa Bed" },
  { id: "SB-049", category: "Sofa Beds", name: "Classic", variant: "1 Seater", price: 400, type: "Sofa Bed" },
  { id: "SB-050", category: "Sofa Beds", name: "Classic", variant: "3+2", price: 1100, type: "Sofa Bed" },
  { id: "SB-051", category: "Sofa Beds", name: "Classic", variant: "3+2+1", price: 1400, type: "Sofa Bed" },

  // --- Drawers ---
  { id: "DR-001", category: "Drawers", name: "KY500", variant: "80cm", price: 100, type: "Drawer" },
  { id: "DR-002", category: "Drawers", name: "D04", variant: "80cm", price: 130, type: "Drawer" },
  { id: "DR-003", category: "Drawers", name: "D05", variant: "80cm", price: 140, type: "Drawer" },
  { id: "DR-004", category: "Drawers", name: "D06", variant: "80cm", price: 150, type: "Drawer" },
  { id: "DR-005", category: "Drawers", name: "D07", variant: "120cm", price: 180, type: "Drawer" },
  { id: "DR-006", category: "Drawers", name: "D09", variant: "120cm", price: 200, type: "Drawer" },
  { id: "DR-007", category: "Drawers", name: "CD3+3", variant: "120cm", price: 125, type: "Drawer" },

  // --- Living ---
  { id: "LV-001", category: "Living", name: "TV01", variant: "180cm", price: 220, type: "TV Unit" },
  { id: "LV-002", category: "Living", name: "TV01", variant: "150cm", price: 180, type: "TV Unit" },
  { id: "LV-003", category: "Living", name: "TV02", variant: "180cm", price: 220, type: "TV Unit" },
  { id: "LV-004", category: "Living", name: "TV02", variant: "150cm", price: 180, type: "TV Unit" },
  { id: "LV-005", category: "Living", name: "CT01", variant: "120cm", price: 180, type: "Coffee Table" },
  { id: "LV-006", category: "Living", name: "CT02", variant: "120cm", price: 180, type: "Coffee Table" },
  
  { id: "LV-007", category: "Living", name: "XE02A", variant: "80cm", price: 125, type: "Shoe Rack" },
  { id: "LV-008", category: "Living", name: "XE02B", variant: "120cm", price: 150, type: "Shoe Rack" },
  { id: "LV-009", category: "Living", name: "Combi", variant: "90cm", price: 85, type: "Shoe Rack" },
  { id: "LV-010", category: "Living", name: "XE13-1M", variant: "60cm", price: 75, type: "Shoe Rack" },
  { id: "LV-011", category: "Living", name: "XE14-1M", variant: "60cm", price: 85, type: "Shoe Rack" },
  { id: "LV-012", category: "Living", name: "XE34", variant: "60cm", price: 60, type: "Shoe Rack" },
  { id: "LV-013", category: "Living", name: "XE42", variant: "60cm", price: 65, type: "Shoe Rack" },
  { id: "LV-014", category: "Living", name: "XE41", variant: "60cm", price: 70, type: "Shoe Rack" },
  { id: "LV-015", category: "Living", name: "XE51", variant: "60cm", price: 80, type: "Shoe Rack" },

  { id: "LV-016", category: "Living", name: "380", variant: "120cm", price: 350, type: "Wall Unit" },
  { id: "LV-017", category: "Living", name: "1703", variant: "80cm", price: 250, type: "Wall Unit" },
  { id: "LV-018", category: "Living", name: "1709", variant: "80cm", price: 250, type: "Wall Unit" },
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
