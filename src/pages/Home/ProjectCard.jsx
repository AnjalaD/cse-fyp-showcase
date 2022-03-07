import { Card, Chip, Chips, Text, Title } from "@mantine/core";
import { useHistory } from "react-router-dom";
import { SharedElement, MotionScene, useMotion } from "react-motion-layout";

export default function ProjectCard({
  id,
  title,
  description,
  image,
  categories,
}) {
  const history = useHistory();

  const onProjectClick = () => {
    history.push(`/project/${id}`);
  };

  const withTransition = useMotion(`project-${id}`);

  return (
    <Card>
      <Card.Section
        onClick={withTransition(onProjectClick)}
        sx={{ cursor: "pointer" }}
      >
        <MotionScene name={`project-${id}`}>
          <SharedElement.Div animationKey="project">
            <img style={{ width: "100%" }} src={image} alt="project" />

            <Title order={4} mb="sm">
              {title}
            </Title>
            <Text mb="xs">{description}</Text>

            <Chips multiple variant="filled" value={categories}>
              {categories.map((cat) => (
                <Chip key={cat} value={cat}>
                  {cat.toUpperCase()}
                </Chip>
              ))}
            </Chips>
          </SharedElement.Div>
        </MotionScene>
      </Card.Section>
    </Card>
  );
}
