import { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'Premium cotton t-shirt with modern fit',
    price: 19.99,
    originalPrice: 29.99,
    images: [
      'https://pin.it/7i6bkhLcp',
      'https://pin.it/422g5717f'
    ],
    category: 'tshirts',
    subcategory: 'casual',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#ffffff', '#ff0000'],
    inStock: true,
    rating: 4.5,
    reviews: 124
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    description: 'Premium denim jeans with modern cut',
    price: 49.99,
    originalPrice: 79.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6815d513d51a?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
      'https://images.unsplash.com/photo-1521572163474-6815d513d51b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80'
    ],
    category: 'pants',
    subcategory: 'denim',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['#000000', '#0000ff'],
    inStock: true,
    rating: 4.2,
    reviews: 89
  },
  {
    id: '3',
    name: 'Summer Dress',
    description: 'Lightweight summer dress for casual wear',
    price: 34.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6815d513d51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
      'https://images.unsplash.com/photo-1521572163474-6815d513d51d?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80'
    ],
    category: 'dresses',
    subcategory: 'summer',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#ff0000', '#0000ff', '#00ff00'],
    inStock: true,
    rating: 4.7,
    reviews: 42
  }
];

export default products;