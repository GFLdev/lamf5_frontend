"use client"
import {useSearchParams} from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import bcrypt from "bcryptjs";

export default async function PageGuard({
	children
}: {
	children: ReactNode
}) {
	const user = useSearchParams().get("user");
	const pass = useSearchParams().get("pass");
	const hash = await bcrypt.hash(process.env.ADMIN_PASS, 5)
		.then(hash => hash);
	const isAuthenticated = pass === hash && user === process.env.ADMIN_NAME;

	if (isAuthenticated) {
		return children;
	}
	return (
		<section className="">
			<p>Acesso Negado!</p>
			<Link href="/auth">
				<button>Ir para o login</button>
			</Link>
		</section>
	);
}
