"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }) {
	const newsSlug = params.slug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
	console.log(newsItem);

	if (!newsItem){
	  notFound()
	}

const newDate = new Date(newsItem.date)
const formattedDate = newDate.toLocaleDateString('en-GB',{
  day:'2-digit',
  month: 'long',
  year: 'numeric'
})

	return (
		<article className='news-article'>
			<header>
				<img src={`/images/news/${newsItem.image}`} alt="" />
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{formattedDate}</time>
			</header>
      <p>{newsItem.content}</p>
		</article>
	);
}
