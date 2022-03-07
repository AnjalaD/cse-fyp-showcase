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
  MediaQuery,
  Text,
  Title,
} from "@mantine/core";
import { MotionScene, MotionScreen, SharedElement } from "react-motion-layout";
import { Redirect } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";

const { projects } = allData;

export default function Project() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowVideo(true);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);

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
                  <MediaQuery smallerThan="sm" styles={{ maxHeight: 300 }}>
                    {!showVideo ? (
                      <img
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                        src={project.image}
                        alt="project"
                      />
                    ) : (
                      <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/KRvv0QdruMQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    )}
                  </MediaQuery>

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
