"use client";
import { Title } from "@mantine/core";

type Props = {
  servers: any;
};

export const Client = ({ servers }: Props) => {
  return <Title order={4}>{JSON.stringify(servers, undefined, 0)}</Title>;
};
