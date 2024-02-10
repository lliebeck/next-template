"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../config/i18n-config";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <Typography>Locale switcher:</Typography>
      {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}> */}
      <List>
        {i18n.locales.map((locale) => {
          return (
            <ListItem key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
