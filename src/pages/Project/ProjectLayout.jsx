import { Member } from "./Member";
import { ActionIcon, Box, Title } from "@mantine/core";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Layout from "../../components/Layout";

export default function ProjectLayout({ children, project }) {
  const history = useHistory();

  const back = () => history.goBack();

  return (
    <Layout
      title={
        <>
          <ActionIcon onClick={back}>
            <FaArrowLeft size={20} />
          </ActionIcon>

          <Title order={4}>Final Year Project Showcase</Title>
        </>
      }
      sidebar={
        <>
          <Box mb="xl">
            <Title order={5} mb="md">
              Team - {project.teamName}
            </Title>
            {project.teamMembers.map(({ name, index }) => (
              <Member key={index} name={name} index={index} />
            ))}
          </Box>

          <Box mb="xl">
            <Title order={5} mb="md">
              Supervisor
              {project.internalSupervisor && project.externalSupervisor
                ? "s"
                : ""}
            </Title>
            {project.internalSupervisor && (
              <Member
                name={project.internalSupervisor.name}
                index={project.internalSupervisor.sub}
              />
            )}

            {project.externalSupervisor && (
              <Member
                name={project.externalSupervisor.name}
                index={project.externalSupervisor.sub}
              />
            )}
          </Box>
        </>
      }
    >
      {children}
    </Layout>
  );
}
