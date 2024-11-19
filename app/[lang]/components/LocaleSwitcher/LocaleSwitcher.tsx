"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "../../../../config/i18n-config";
import { Box, Select, Image } from "@mantine/core";
import images from "./images";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const params = useParams<{ lang: Locale }>();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const getLabel = (locale: Locale) => {
    switch (locale) {
      case "en-us":
        return "English";
      case "de-de":
        return "German";
      default:
        return "English";
    }
  };

  const getImage = () => {
    switch (params.lang) {
      case "en-us":
        return <Image src={images.english} width={18} height={18} alt="text" />;
      case "de-de":
        return <Image src={images.german} width={18} height={18} alt="text" />;
      default:
        return <Image src={images.english} width={18} height={18} alt="text" />;
    }
  };

  const data = i18n.locales.map((value) => ({
    value: value,
    label: getLabel(value),
  }));

  return (
    <Box ml="auto">
      <Select
        leftSection={getImage()}
        w={100}
        size="xs"
        data={data}
        value={params.lang}
        onChange={(_, item) =>
          router.push(redirectedPathName(item.value as Locale))
        }
      />
    </Box>
  );
}
