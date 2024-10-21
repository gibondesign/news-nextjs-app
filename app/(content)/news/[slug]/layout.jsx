export default function newsPageLayout({ children, modal }) {
	return (
		<>
			{modal}
			{children}
		</>
	);
}
