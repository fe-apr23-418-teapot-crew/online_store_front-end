import { Product } from './Product';

export interface ApiResponse {
  count: number;
  rows: Product[];
}
