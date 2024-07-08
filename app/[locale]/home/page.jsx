import { getLocale } from "@/app/helper/getLocales";

export default function Home({ params }) {
  const locales = getLocale(params.locale)
  return (
    <main className="flex flex-col items-center  p-24">
      <h1 className="text-3xl"> {locales.home}</h1>
    </main>
  );
}
