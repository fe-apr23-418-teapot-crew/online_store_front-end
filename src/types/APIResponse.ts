import { Product } from './Product';

export interface APIResponse {
  count: number;
  rows: Product[];
}
