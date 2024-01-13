export const PRODUCT_CATEGORIES = [
  {
    label: 'Clothing & Shoes',
    slug: 'clothing_&_shoes' as const,
    featured: [
      {
        name: 'New Arrivals',
        href: '#',
        imageUrl: ''
      },
      {
        name: 'Best Sellers',
        href: '#',
        imageUrl: ''
      },
      {
        name: 'Gift Ideas',
        href: '#',
        imageUrl: ''
      },

    ]
  },
  {
    label: 'Electronics',
    slug: 'electronics' as const,
    featured: [
      {
        name: 'New Arrivals',
        href: '#',
        imageUrl: ''
      },
      {
        name: 'Best Sellers',
        href: '#',
        imageUrl: ''
      },
      {
        name: 'Gift Ideas',
        href: '#',
        imageUrl: ''
      },

    ]
  },
  {
    label: 'Grocery & Food',
    slug: 'grocery_&_food' as const,
    featured: [
      {
        name: 'New Arrivals',
        href: '#',
        imageUrl: ''
      },
      {
        name: 'Best Sellers',
        href: '#',
        imageUrl: ''
      },
      {
        name: 'Gift Ideas',
        href: '#',
        imageUrl: ''
      },

    ]
  }
]

export type Category = typeof PRODUCT_CATEGORIES[number]