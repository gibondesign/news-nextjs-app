'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {

    const path = usePathname()


	return (
        <li>
			<Link href={href} className={path === `/${href}` ? 'active' : null}>{children}</Link>
		</li>
	);
}
