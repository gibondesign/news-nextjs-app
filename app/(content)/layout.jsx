import MainHeader from "@/components/MainHeader";



export default function RootLayout({ children }) {
	return (
		<div id="page">
			<MainHeader />
			{children}
		</div>
	);
}
