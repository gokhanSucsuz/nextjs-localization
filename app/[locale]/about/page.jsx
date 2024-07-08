import { getLocale } from "@/app/helper/getLocales";

export default function About({ params }) {
    const locales = getLocale(params.locale)
    return (
        <main className="flex  flex-col items-center p-24">
            <h1 className="text-3xl"> {locales.about}</h1>
        </main>
    );
}
