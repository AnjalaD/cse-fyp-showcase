import { Avatar, Group, Text } from "@mantine/core";
import React from "react";
export function Member({ name, index }) {
  return (
    <Group mb="sm" ml="xl">
      <Avatar>X</Avatar>
      <Group direction="column" spacing={0}>
        <Text>{name}</Text>
        <Text>
          <small>{index}</small>
        </Text>
      </Group>
    </Group>
  );
}
