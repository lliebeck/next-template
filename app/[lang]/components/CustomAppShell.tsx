"use client";

import { AppShell, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DarkModeSwitcher } from "./DarkModeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";
import { Navbar } from "./Navbar";
import Image from "next/image";

export const CustomAppShell = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" w="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image height={50} width={50} src="/logo.png" alt="Logo" />
          <Title>Next Template</Title>
          <LocaleSwitcher />
          <DarkModeSwitcher />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
