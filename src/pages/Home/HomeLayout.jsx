import { Box, Checkbox, Title } from "@mantine/core";
import { useHistory } from "react-router-dom";

import allData from "../../data.json";
import useFilterParams from "../../hooks/useFilterParams";
import Layout from "../../components/Layout";

const { categories, batches } = allData;

export default function HomeLayout({ children }) {
  const history = useHistory();
  const filters = useFilterParams();

  let selectedBatches = [...filters.selectedBatches];
  let selectedCategories = [...filters.selectedCategories];

  const generateUrl = () =>
    `/?batches=${selectedBatches.join(
      ","
    )}&categories=${selectedCategories.join(",")}`;

  const onBatchChange = (e) => {
    const { value } = e.target;
    if (selectedBatches.includes(value)) {
      selectedBatches = selectedBatches.filter((b) => b !== value);
    } else {
      selectedBatches.push(value);
    }
    history.push(generateUrl());
  };

  const onCategoryChange = (e) => {
    const { value } = e.target;
    if (selectedCategories.includes(value)) {
      selectedCategories = selectedCategories.filter((b) => b !== value);
    } else {
      selectedCategories.push(value);
    }
    history.push(generateUrl());
  };

  return (
    <Layout
      title={<Title order={4}>Final Year Project Showcase</Title>}
      sidebar={
        <>
          {batches && batches.length > 0 && (
            <Box mb="xl">
              <Title order={5} mb="md">
                Batch - Year
              </Title>
              {batches.map(({ shortCode, name }) => (
                <Checkbox
                  key={shortCode}
                  value={shortCode}
                  label={name}
                  onChange={onBatchChange}
                  checked={selectedBatches.includes(shortCode)}
                  mb="sm"
                />
              ))}
            </Box>
          )}

          {categories && categories.length > 0 && (
            <Box mb="xl">
              <Title order={5} mb="md">
                Categories
              </Title>
              {categories.map(({ shortCode, name }) => (
                <Checkbox
                  key={shortCode}
                  value={shortCode}
                  label={name}
                  onChange={onCategoryChange}
                  checked={selectedCategories.includes(shortCode)}
                  mb="sm"
                />
              ))}
            </Box>
          )}
        </>
      }
    >
      {children}
    </Layout>
  );
}
