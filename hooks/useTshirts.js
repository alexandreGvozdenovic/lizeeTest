import useSWR from "swr";

export default function useTshirts() {
  const { data, error } = useSWR(
    "https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-t-shirts"
  );
  return {
    tshirts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
