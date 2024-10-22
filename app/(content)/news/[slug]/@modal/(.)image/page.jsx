import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import ModalBackdrop from '@/components/ModalBackdrop'

export default async function ImagePage({ params }) {
	const slug = params.slug;
	const newsItem = await getNewsItem(slug)

	if (!newsItem) {
		notFound();
	}

	return (
		<>
			<ModalBackdrop />
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
