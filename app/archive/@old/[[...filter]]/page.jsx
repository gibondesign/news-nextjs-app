import NewsList from "@/components/NewsList";
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function archivePage({ params }) {
	let links = getAvailableNewsYears();
	const filter = params.filter;

	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	let news;

	if (selectedYear && !selectedMonth) {
		news = getNewsForYear(selectedYear);
		links = getAvailableNewsMonths(selectedYear);
	}

	if (selectedMonth) {
		news = getNewsForYearAndMonth(selectedYear, selectedMonth);
		links = []
	}

	let newsContent = <p>No news found yet...</p>;

	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	console.log(selectedMonth);

	return (
		<>
			<header id="archive-header">
				<h2>archive paraller</h2>
				<h3>Years:</h3>
				<nav>
					<ul>
						{links.map((link) =>{
							const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
						return (
							<li>
								<Link href={href}>{link}</Link>
							</li>
						)})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	);
}
