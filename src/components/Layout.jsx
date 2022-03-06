import { useState } from "react";
import {
  Affix,
  AppShell,
  Box,
  Burger,
  Group,
  Header,
  Image,
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";

export default function Layout({ title, sidebar, children }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
          padding="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 300, lg: 320, xl: 350 }}
        >
          <Navbar.Section
            grow
            component={ScrollArea}
            ml={-10}
            mr={-10}
            sx={{ paddingLeft: 10, paddingRight: 10 }}
          >
            {sidebar}
          </Navbar.Section>

          <Navbar.Section>
            <Group position="center" spacing="lg">
              <Image scr="" height={50} width={100} />
              <Image scr="" height={50} width={100} />
            </Group>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <Group>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            {title}
          </Group>
        </Header>
      }
    >
      <Box mb={200}>{children}</Box>
    </AppShell>
  );
}
