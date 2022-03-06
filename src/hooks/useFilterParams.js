import { useLocation } from "react-router-dom";

export default function useFilterParams() {
  const { search } = useLocation();

  const params = new URLSearchParams(search);

  let selectedBatches = params.get("batches")
    ? params.get("batches").split(",")
    : [];
  let selectedCategories = params.get("categories")
    ? params.get("categories").split(",")
    : [];

  return {
    selectedBatches,
    selectedCategories,
  };
}
