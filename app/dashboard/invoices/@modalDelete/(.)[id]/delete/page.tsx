"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { revalidatePath } from "next/cache";

type Placement =
	| "auto"
	| "center"
	| "top"
	| "top-center"
	| "bottom"
	| "bottom-center";

export default function ModalDeleteInvoicePage({
	params,
}: {
	params: { id: string };
}) {
	const router = useRouter();
	// const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [modalPlacement, setModalPlacement] = useState<Placement>("auto");
	const [isOpen, setIsOpen] = useState(false);

	const handleCancel = () => {
		setIsOpen(false);
		router.push("/dashboard/invoices");
		router.refresh();
	};

	useEffect(() => setIsOpen(true), []);

	return (
		<div className="flex flex-col gap-2">
			<Modal
				isOpen={isOpen}
				placement={modalPlacement}
				onOpenChange={handleCancel}
			>
				<ModalContent>
					<>
						<ModalHeader>Delete Invoice</ModalHeader>
						<ModalBody>
							<p className="font-bold text-xl text-center">
								Are you sure you want to delete this Invoice?
							</p>
							<p>
								<em>{params.id}</em>
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="secondary" variant="shadow" onClick={handleCancel}>
								Cancel
							</Button>
							<Button color="danger" onClick={handleCancel}>
								Delete
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</div>
	);
}
