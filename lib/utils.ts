import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Status_Type } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number) => {
	if (!amount) {
		return "$0.00";
	}
	return (amount / 100).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};

export const formatDatetoLocal = (date: Date) => {
	return date.toLocaleDateString("en-US");
};

export const formatDatetoLocalString = (date: Date) => {
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

export const checkStatus = (q: string): Status_Type => {
	const queryStatus = q.toUpperCase();
	if (
		queryStatus === "PENDING" ||
		queryStatus === "CANCELED" ||
		queryStatus === "PAID"
	) {
		return queryStatus as Status_Type;
	}
	return q as Status_Type;
};
