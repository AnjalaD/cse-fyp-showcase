import { useParams } from "react-router-dom";
import ProjectLayout from "./ProjectLayout";

import allData from "../../data.json";
import {
  Anchor,
  Card,
  Chip,
  Chips,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { MotionScene, MotionScreen, SharedElement } from "react-motion-layout";
import { Redirect } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const { projects } = allData;

export default function Project() {
  const { projectId } = useParams();

  const project = projectId && projects.find(({ id }) => projectId === id);

  if (!project) {
    return <Redirect to="/" />;
  }

  return (
    <ProjectLayout project={project}>
      <Container size="lg">
        <MotionScreen>
          <Card>
            <Card.Section>
              <MotionScene name={`project-${project.id}`}>
                <SharedElement.Div animationKey="project">
                  <img
                    style={{ width: "100%" }}
                    src={project.image}
                    alt="project"
                  />

                  <Title order={4} mb="sm">
                    {project.title}
                  </Title>
                  <Text mb="xs">{project.description}</Text>

                  <Chips
                    mb="xl"
                    multiple
                    variant="filled"
                    value={project.categories}
                  >
                    {project.categories.map((cat) => (
                      <Chip key={cat} value={cat}>
                        {cat.toUpperCase()}
                      </Chip>
                    ))}
                  </Chips>
                </SharedElement.Div>

                <Group>
                  <Anchor href={project.poster}>
                    <FaDownload /> Poster
                  </Anchor>

                  <Anchor href={project.report}>
                    <FaDownload /> Report
                  </Anchor>
                </Group>
              </MotionScene>
            </Card.Section>
          </Card>
        </MotionScreen>
      </Container>
    </ProjectLayout>
  );
}
