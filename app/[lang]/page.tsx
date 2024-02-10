import Typography from "@mui/material/Typography";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../config/i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <Typography>Current locale: {lang}</Typography>
      <Typography>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </Typography>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
