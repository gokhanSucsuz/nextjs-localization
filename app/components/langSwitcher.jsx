"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const locales = ["en", "tr"];

const LangSwitcher = () => {
	const [activeLang, setActiveLang] = useState("en")
	const router = useRouter()
	const pathname = usePathname()
	const handleLang = (lang) => {
		console.log(lang)
		const splittedPath = pathname.split("/").slice(2).join("/")
		router.replace("/" + lang + "/" + splittedPath)
	}
	return (
		<div className="w-fit flex flex-col justify-end gap-2 m-2">
			<p className="p-3 shadow-lg rounded-lg text-pink-800 font-bold">Change Lang</p>
			{
				locales.map(item => {
					console.log(item)
					return (
						<button className="p-2 bg-orange-500 text-white rounded-lg" key={item} onClick={() => handleLang(item)}>{item}</button>
					)
				})
			}

		</div>
	)
};

export default LangSwitcher;