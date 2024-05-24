"use client";

import { useRouter } from "next/navigation";
import jsonData from "@/lib/placeholder-data";
import { Button } from "@nextui-org/button";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Invoices() {
	const router = useRouter();
	const data = jsonData.invoices;

	const handleDelete = (id: string) => {
		router.push(`/dashboard/invoices/${id}/delete`);
		router.refresh();
	};

	return (
		<div>
			<h2>Invoices</h2>
			<ul>
				{data.map((invoice) => (
					<div key={invoice.id}>
						<li className="flex flex-row items-center justify-between py-2">
							<p>{invoice.customer_id}</p>
							<p>{invoice.date}</p>
							<div>
								<Button color="primary" variant="light">
									<PencilIcon className="w-5 h-5" />
									<span className="sr-only">Edit</span>
								</Button>
								<Button
									color="danger"
									variant="light"
									onClick={() => handleDelete(invoice.id)}
								>
									<TrashIcon className="w-5 h-5" />
									<span className="sr-only">Delete</span>
								</Button>
							</div>
						</li>
					</div>
				))}
			</ul>
		</div>
	);
}
