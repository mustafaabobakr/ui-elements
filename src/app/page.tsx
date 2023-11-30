import { Metadata } from "next/types";
import RenderAll from "./renderAll";

export const metadata: Metadata = {
	title: "Modern React-TS UI Elements",
	description: "Modern React-TS UI Elements",
	authors: {
		name: " Mostafa Abobakr",
		url: "https://mostafaabobakr.com",
	},
	icons: "https://mostafaabobakr.com/favicon.ico",
};

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<RenderAll />
		</main>
	);
}
