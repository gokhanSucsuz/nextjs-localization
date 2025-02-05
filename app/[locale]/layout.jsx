import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LangSwitcher from "@/app/components/langSwitcher"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  console.log("layout", params)
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-4/6 mx-auto border m-2 shadow-lg">
          <div className="flex gap-2 m-2 items-center justify-between">
            <div className="flex gap-2">
              <Link className="p-2 bg-red-500 text-white rounded-lg" href={`/${params.locale}/home`}>Home</Link>
              <Link className="p-2 bg-red-500 text-white rounded-lg" href={`/${params.locale}/about`}>About</Link>
            </div>
            <LangSwitcher />
          </div>
          {children}
        </div>

      </body>
    </html>
  );
}
