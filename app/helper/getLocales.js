import en from "../locales/en.json";
import tr from "../locales/tr.json";

const locales = {
	en,
	tr
};

export const getLocale = (locale) => {
	return locales[locale];
};
