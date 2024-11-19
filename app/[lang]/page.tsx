import { Locale } from "../../config/i18n-config";
import { getDictionary } from "../../get-dictionary";
import Counter from "./components/counter";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { lang } = params;

  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>Current locale: {lang}</h1>
      <h1>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </h1>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
