import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { i18n } from "../../config/i18n-config";
import { theme } from "../../config/theme";
import { CustomAppShell } from "./components/CustomAppShell";

type Params = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Next App Template",
  description: "Next template with MUI and i18n",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <CustomAppShell>{children}</CustomAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
