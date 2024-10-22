import ArchiveHeader from "@/components/ArchiveHeader";
import FilteredNews from "@/components/FilteredNews";
import { Suspense } from "react";

export default async function archivePage({ params }) {
	const filter = params.filter;

	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	return (
		<>
			<Suspense fallback={<p>Loading filter...</p>}>
				<ArchiveHeader year={selectedYear} month={selectedMonth} />
			</Suspense>
			<Suspense fallback={<p>Loading news...</p>}>
				<FilteredNews year={selectedYear} month={selectedMonth} />
			</Suspense>
		</>
	);
}
