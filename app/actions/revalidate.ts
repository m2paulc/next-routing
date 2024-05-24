"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const RevalidatePath = ({ params }: { params: string }) => {
	revalidatePath(params);
	redirect(params);
};
