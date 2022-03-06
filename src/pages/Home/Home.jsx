import { SimpleGrid } from "@mantine/core";
import HomeLayout from "./HomeLayout";

import ProjectCard from "./ProjectCard";

import allData from "../../data.json";
import useFilterParams from "../../hooks/useFilterParams";
import { MotionScreen } from "react-motion-layout";

const allProjects = allData.projects;

export default function Home() {
  const { selectedBatches, selectedCategories } = useFilterParams();

  const projects = allProjects.filter((project) => {
    if (selectedBatches.length > 0) {
      if (!selectedBatches.includes(project.batch)) {
        return false;
      }
    }

    if (selectedCategories.length > 0) {
      if (
        selectedCategories.filter((value) => project.categories.includes(value))
          .length === 0
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <HomeLayout>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { cols: 1, maxWidth: "xs" },
          { cols: 2, minWidth: "sm" },
          { cols: 3, minWidth: "lg" },
          { cols: 4, minWidth: "xl" },
        ]}
      >
        <MotionScreen>
          {projects?.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </MotionScreen>
      </SimpleGrid>
    </HomeLayout>
  );
}
