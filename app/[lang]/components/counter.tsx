"use client";

import { useState } from "react";
import { type getDictionary } from "../../../get-dictionary";
import { Button, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  return (
    <Title order={4}>
      This component is rendered on client:
      <Button mx="xs" color="orange" onClick={() => setCount((n) => n - 1)}>
        {dictionary.decrement}
      </Button>
      {count}
      <Button mx="xs" onClick={() => setCount((n) => n + 1)}>
        {dictionary.increment}
      </Button>
      <Button
        mx="xs"
        onClick={() => {
          router.push("/home");
        }}
      >
        Home
      </Button>
    </Title>
  );
}
