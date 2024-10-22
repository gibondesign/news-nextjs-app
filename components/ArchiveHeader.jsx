import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default async function ArchiveHeader({ year, month }) {
	const availableYears = await getAvailableNewsYears();
	let links = availableYears;
	let newsNavigation = "Years:";

	if (year && !month) {
		links = await getAvailableNewsMonths(year);
		newsNavigation = "Months:";
	}

	if (month) {
		links = [];
		newsNavigation = (
			<Link className="backBtn" href="/archive">
				⬅️Get Back to Years
			</Link>
		);
	}
	if (
		(year && !availableYears.includes(year)) ||
		(month &&
			!getAvailableNewsMonths(year).includes(month))
	) {
		throw new Error("invalid filter");
	}



	return (
		<header id="archive-header">
			<h3>{newsNavigation}</h3>
			<nav>
				<ul>
					{links.map((link) => {
						const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
						return (
							<li>
								<Link href={href}>{link}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
