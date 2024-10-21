"use client";
import NewsList from "@/components/NewsList";
import { useEffect, useState } from "react";

export default function NewsPage() {
	const [news, setNews] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		async function fetchNews() {
			setIsLoading(true);
			setError(null)

			try {
				const response = await fetch(" http://localhost:8080/news");
				
				if (!response.ok) {
					throw new Error("Failed to fetch news.");
				}
				const newsFetch = await response.json();
				setNews(newsFetch)
			} catch (err) {
				setError(err.message)
			} finally {
				setIsLoading(false)
			}
		
		}

		fetchNews();
	}, []);

	let newsContent;

	if (news) {
		newsContent = <NewsList news={news} />;
	}
	console.log(news);

	return (
		<>
			<h1>News Page</h1>
			{isLoading && <p>Fetching data....</p>}
			{error && <p>{error}</p>}
			{error}
			{newsContent}
		</>
	);
}
