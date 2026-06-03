// Define the Product interface
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  slug?: string;
}

// Define CartItem interface
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

// Define WishlistItem interface
export interface WishlistItem {
  id: string;
  product: Product;
}

export default Product