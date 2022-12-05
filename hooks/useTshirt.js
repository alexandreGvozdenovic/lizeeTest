import useSWR from "swr";

export default function useTshirt(slug) {
  const { data, error } = useSWR(
    `https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/products/by-slug/${slug}`
  );
  return {
    tshirt: data,
    isLoading: !error && !data,
    isError: error,
  };
}
