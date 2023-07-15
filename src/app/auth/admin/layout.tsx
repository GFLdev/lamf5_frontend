import {CalendarOutlined, UserOutlined, FileTextOutlined} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import PageGuard from "../auth";

export default function AdminLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<PageGuard>
			<section className="flex flex-row bg-white">
				<nav className="flex flex-col items-center justify-start h-screen gap-8 py-4 bg-black select-none w-52">
					<Link href="/">
						<Image src="/assets/logo.png" alt="LAMF5" width={65} height={65} />
					</Link>
					<div className="flex flex-col gap-4">
						<Link href="/auth/admin/members">
							<button className="flex flex-row items-center gap-2">
								<UserOutlined />
								<p>Membros</p>
							</button>
						</Link>
						<Link href="/auth/admin/articles"></Link>
						<Link href="/auth/admin/events"></Link>
						<Link href="/auth/admin/partners"></Link>
						<Link href="/auth/admin/project"></Link>
					</div>
				</nav>
				<div className="w-full">{children}</div>
			</section>
		</PageGuard>
	);
}
