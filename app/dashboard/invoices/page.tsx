import jsonData from "@/lib/placeholder-data";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Invoices() {
	const data = jsonData.invoices;
	return (
		<div>
			<h2>Invoices</h2>
			<ul>
				{data.map((invoice) => (
					<div key={invoice.id}>
						<li className="flex flex-row gap-4 items-center py-2">
							{invoice.customer_id}
							<button>
								<PencilIcon className="w-5 h-5" />
							</button>
							<button>
								<TrashIcon className="w-5 h-5" />
							</button>
						</li>
					</div>
				))}
			</ul>
		</div>
	);
}
