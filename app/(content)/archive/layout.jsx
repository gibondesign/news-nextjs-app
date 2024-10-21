export default function ArchiveLayout({ old, latest }) {
	return (
		<div>
			<h1>News Archive</h1>
			<section id="archive-filter">{old}</section>
			<section id="archive-latest">{latest}</section>
		</div>
	);
}
