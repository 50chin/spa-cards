export interface ProductsProps {
  products: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: unknown | null;
}
