import SideNav from "@/app/ui/sidenav";
import { Providers } from "@/app/providers";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-[12rem]">
				<SideNav />
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:p-12">
				<Providers>{children}</Providers>
			</div>
		</div>
	);
}
