export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

export type LaborSetting = {
	id: string;
	labor_rate_in_cents: number;
	effective_date: string;
	user_id: string;
};

export type Customer = {
	id: string;
	last_name: string;
	first_name: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	home_tel: string;
	cell_tel: string;
	work_tel: string;
	driver_license: string;
	driver_license_state: string;
	email: string;
};

export type Invoice = {
	id: string;
	invoice_number: string;
	date: string;
	customer_id: string;
	vehicle_id: string;
	labor_id: string;
	service_request: string;
	discount_in_cents: number;
	tax_in_cents: number;
	tax_exempt: boolean;
	labor_rate_in_cents: number;
	labor_total_in_cents: number;
	subtotal_in_cents: number;
	total_in_cents: number;
	amount_paid_in_cents: number;
	balance_in_cents: number;
	payment_type:
		| "CASH"
		| "CHECK"
		| "CREDIT_CARD"
		| "DEBIT_CARD"
		| "COMPANY_ACCOUNT";
	status: "PENDING" | "PAID" | "CANCELED";
	tech_note: string | null;
	customer_note: string | null;
};

export type Vehicle = {
	id: string;
	customer_id: string;
	model: string;
	make: string;
	year: number;
	engine_size: number;
	vin: string;
	odometer: number;
	plate_number: string;
	tire_size: string;
};

export type PartAndLabor = {
	id: string;
	invoice_id: string;
	customer_id: string;
	date: string;
	part_store: string;
	sku_num: string;
	description: string;
	quantity: number;
	labor_description: string;
	labor_hours: number;
	labor_id: string;
	cost_price_in_cents: number;
	list_price_in_cents: number;
	total_price_in_cents: number;
};
