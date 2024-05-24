import { Providers } from "@/app/providers";

interface Props {
	children: React.ReactNode;
	modalDelete: React.ReactNode;
}

export default function InvoicesLayout({ children, modalDelete }: Props) {
	return (
		<Providers>
			<div className="flex h-screen flex-col md:overflow-hidden">
				{children}
				<br />
				{modalDelete}
			</div>
		</Providers>
	);
}
