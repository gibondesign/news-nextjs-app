
import BackButton from "@/components/BackButton";
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
	let newsNavigation = 'Years:'

	if (selectedYear && !selectedMonth) {
		news = getNewsForYear(selectedYear);
		links = getAvailableNewsMonths(selectedYear);
		newsNavigation = "Months:"
	}

	if (selectedMonth) {
		news = getNewsForYearAndMonth(selectedYear, selectedMonth);
		links = []
		newsNavigation = <Link className="backBtn" href='/archive'> ⬅️Get Back</Link>
	}

	let newsContent = <p>No news found yet...</p>;

	

	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	if(selectedYear && !getAvailableNewsYears().includes(+selectedYear) || selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth) ) {
		throw new Error ('invalid filter')
	}




	return (
		<>
			<header id="archive-header">
				<h2>archive paraller</h2>
				<h3>{newsNavigation}</h3>
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
